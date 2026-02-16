const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// public配下を静的配信
app.use(express.static(path.join(__dirname,
"public")));

// /c/syun001 のように末尾スラッシュ無しでも index.html を返す保険
app.get("/c/:id", (req, res) => {
  res.sendFile(path.join(__dirname,
    "public",
    "c", req.params.id,
    "index.html"));
});

// 動作確認用
app.get("/health", (_req, res) => res.status(200).send("ok"));

app.listen(PORT, () => console.log(`listening on ${PORT
}`));
