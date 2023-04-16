const MongoDB = require("mongoose");

const TaskSchema = new MongoDB.Schema({
  title: String,
});
const TaskDB = MongoDB.model("Task", TaskSchema);

module.exports = {
  TaskDB,
  TaskSchema,
};
