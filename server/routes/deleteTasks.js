const express = require("express");

const MongoDB = require("mongoose");
const models = require("../models");
const TaskDB = models.TaskDB;

const router = express.Router();

router.post("/", async (req, res) => {
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
module.exports = router;
