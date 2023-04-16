const express = require("express");
const port = 4000;
const MongoDB = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const addTaskRoute = require("./routes/addTasks");
const deleteTaskRoute = require("./routes/deleteTasks");
const getTaskRoute = require("./routes/getTasks");
app.use(cors());
app.use(express.json());
dotenv.config();
const { MONGO_URI } = process.env;

app.use(express.json());
app.use(cors());
app.use("/api/addTask", addTaskRoute);
app.use("/api/deleteTask", deleteTaskRoute);
app.use("/api/getTasks", getTaskRoute);

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
  res.send("Testing request");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
