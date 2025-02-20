const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the Task CRUD API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
