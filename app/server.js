const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

let tasks = [
  { id: 1, title: "Learn Docker" },
  { id: 2, title: "Learn Kubernetes" }
];

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  task.title = req.body.title;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);

  res.json({
    message: "Task deleted"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log("Task Manager app running on port 3000");
});