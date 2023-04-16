import { motion } from "framer-motion";
import React from "react";
import delete_svg from "../../../Icons/delete.svg";
import "./Task.scss";
function Task(props) {
  return (
    <div>
      {props.tasks.length > 0 ? (
        props.tasks.map((task, index) => (
          <div className="task_container" key={index}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="task_style"
            >
              #{index + 1}. {task}
            </motion.h1>
            <img
              onClick={() => props.deleteTask(index, task)}
              className="delete_icon"
              src={delete_svg}
              alt="delete icon"
            />
          </div>
        ))
      ) : (
        <h1 className="no_task_found">No tasks to display</h1>
      )}
    </div>
  );
}

export default Task;
