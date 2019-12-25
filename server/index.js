const PORT = process.env.PORT || 5000;
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/static")));

app.get("/", (req, res) => {
  res.sendfile("index.html");
});

app.get("/db", async (req, res) => {
  const db = await require("./db.json");
  res.send(db);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
