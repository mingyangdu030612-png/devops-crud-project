const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "tasks",
  password: "postgres",
  port: 5432,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tasks", async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id");
  res.json(result.rows);
});

app.post("/tasks", async (req, res) => {
  const { title } = req.body;

  const result = await pool.query(
    "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
    [title]
  );

  res.status(201).json(result.rows[0]);
});

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const result = await pool.query(
    "UPDATE tasks SET title = $1 WHERE id = $2 RETURNING *",
    [title, id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(result.rows[0]);
});

app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    "DELETE FROM tasks WHERE id = $1 RETURNING *",
    [id]
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Task Manager app running on port 3000");
});