import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Task from "../Task/Task";
import "./TaskContainer.scss";
function TaskContainer(props) {
  const inputRef = useRef(null);

  const maxTasks = 7;

  const [tasks, setTasks] = React.useState([]);

  async function fetchTasksFromDB() {
    try {
      const response = await axios.get("http://localhost:4000/getTasks");

      let newTasks = response.data.map((task) => task.title);

      return newTasks;
    } catch (error) {
      console.log(error);
    }
  }

  async function addTaskToDB(currentTask) {
    try {
      const response = await axios.post("http://localhost:4000/addTask", {
        task: currentTask,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteTaskFromDB(index, task) {
    try {
      const response = await axios.post("http://localhost:4000/deleteTask", {
        task: task,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getTasks() {
      const newTasks = await fetchTasksFromDB();
      setTasks(newTasks);
    }

    getTasks();
  }, []);

  const deleteTask = (index, task) => {
    /**
     * deleteTask function inputted task from the tasks array,
     * updating the state and re-rendering the component
     */

    setTasks(tasks.filter((_, i) => i !== index));

    deleteTaskFromDB(index, task);
  };

  async function addTask(e) {
    /**
     * addTask function adds a task to the tasks array, if the task is not empty
     * and the number of tasks is less than the maximum number of tasks,
     * updating the state and re-rendering the component
     */

    let currentTask = inputRef.current.value;
    if (currentTask.length > 0 && tasks.length < maxTasks) {
      setTasks([...tasks, currentTask]);
      inputRef.current.value = "";
    } else if (tasks.length === maxTasks) {
      alert(
        "You have reached the maximum number of tasks. Please delete a task to add a new one."
      );
    }
    e.preventDefault();
    setRenderSearchIcon(false);

    await addTaskToDB(currentTask);
  }

  const [renderSearchIcon, setRenderSearchIcon] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      whileHover={[
        { boxShadow: ".5px .5px 4px 3px rgba(0,0,20,0.75)" },
        { scale: 1.05 },
      ]}
      drag={true}
      dragElastic={1}
      dragMomentum={false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className="ToDoList_box"
    >
      <motion.h1 className="ToDoList_header"> TaskRabbit 🐇 </motion.h1>
      <div className="ToDoList_horz_line"></div>
      <Task deleteTask={deleteTask} tasks={tasks} />

      <SearchBox
        inputRef={inputRef}
        setRenderSearchIcon={setRenderSearchIcon}
        renderSearchIcon={renderSearchIcon}
        addTask={addTask}
      />
    </motion.div>
  );
}

export default TaskContainer;
