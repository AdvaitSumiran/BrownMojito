const TaskModel = require("../models/taskModel");

const TaskController = {
  getAllTasks: (req, res) => {
    res.json(TaskModel.getAll());
  },
  getTaskById: (req, res) => {
    const task = TaskModel.getById(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ message: "Task not found" });
  },
  createTask: (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });
    const newTask = TaskModel.create({ title, description });
    res.status(201).json(newTask);
  },
  updateTask: (req, res) => {
    const updatedTask = TaskModel.update(req.params.id, req.body);
    if (updatedTask) res.json(updatedTask);
    else res.status(404).json({ message: "Task not found" });
  },
  deleteTask: (req, res) => {
    const result = TaskModel.delete(req.params.id);
    if (result) res.json({ message: "Task deleted successfully" });
    else res.status(404).json({ message: "Task not found" });
  },
};

module.exports = TaskController;
