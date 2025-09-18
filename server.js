const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const dataFile = path.join(__dirname, "data", "tasks.json");

app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/api/tasks", (req, res) => {
  try {
    const tasks = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to read tasks file" });
  }
});

// Add new task
app.post("/api/tasks", (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !priority) {
    return res.status(400).json({ error: "Title and priority are required" });
  }

  const validPriorities = ["low", "medium", "high", "urgent"];
  if (!validPriorities.includes(priority)) {
    return res.status(400).json({ error: "Invalid priority value" });
  }

  const newTask = {
    taskId: "TASK-" + Date.now(),
    title,
    description: description || "",
    priority,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  try {
    const tasks = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    tasks.push(newTask);
    fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2));
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to save new task" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
