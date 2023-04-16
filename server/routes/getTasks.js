const express = require("express");

const MongoDB = require("mongoose");
const models = require("../models");
const TaskDB = models.TaskDB;
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const tasks = await TaskDB.find({});
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
