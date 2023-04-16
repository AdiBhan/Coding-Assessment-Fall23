const express = require("express");

const MongoDB = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = 4000;
dotenv.config();
const { MONGO_URI } = process.env;
const models = require("./models");
const TaskDB = models.TaskDB;

ConnectToMongo();
async function ConnectToMongo() {
  try {
    await MongoDB.connect(MONGO_URI, {});
    console.log("Connected to MongoDB Atlas TaskRabbit Database");
  } catch (error) {
    console.log(error);
  }
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getTasks", async (req, res) => {
  try {
    const tasks = await TaskDB.find({});
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

app.post("/addTask", async (req, res) => {
  try {
    const taskTitle = req.body.task; // Access the task data from the request body
    const task = new TaskDB({
      title: taskTitle,
    });
    await task.save();
    res.json(task);
  } catch (error) {
    console.log(error);
  }
});

app.post("/addTask", async (req, res) => {
  try {
    const taskTitle = req.body.task; // Access the task data from the request body
    const task = new TaskDB({
      title: taskTitle,
    });
    await task.save();
    res.json(task);
  } catch (error) {
    console.log(error);
  }
});

app.post("/deleteTask", async (req, res) => {
  try {
    const taskTitle = req.body.task; // Access the task data from the request body
    const task = new TaskDB({
      title: taskTitle,
    });
    await TaskDB.deleteOne({ title: taskTitle });
    res.json(task);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
