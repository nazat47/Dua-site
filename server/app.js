const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

const db = new sqlite3.Database("./assets/dua_main.sqlite");

// route to retrieve data from the database
app.get("/category", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});
app.get("/dua/:subcatid", (req, res) => {
  const { subcatid } = req.params;
  db.all("SELECT * FROM dua WHERE subcat_id=?", [subcatid], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});
app.get("/sub-category/:catid", (req, res) => {
  const { catid } = req.params;
  db.all(`SELECT * FROM sub_category WHERE cat_id=?`, [catid], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running  on port ${port}`);
});
