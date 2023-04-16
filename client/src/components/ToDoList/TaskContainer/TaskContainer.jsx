import { motion } from "framer-motion";
import React, { useRef } from "react";
import search_icon from "../../../Icons/search.svg";
import "./TaskContainer.scss";
function TaskContainer(props) {
  const inputRef = useRef(null);

  const addTask = (e) => {
    e.preventDefault();
    console.log("hey");
    setRenderSearchIcon(false);
  };

  const [renderSearchIcon, setRenderSearchIcon] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      whileHover={[
        { boxShadow: "0px 0px 10px 2px rgba(0,0,20,0.75)" },
        { scale: 1.05 },
      ]}
      drag={true}
      dragElastic={1}
      dragMomentum={false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className="ToDoList_box"
    >
      <motion.h1 className="ToDoList_header">
        {" "}
        Click to add upcoming tasks
      </motion.h1>
      <div className="ToDoList_horz_line"></div>

      <motion.div className="ToDoList_task_box"></motion.div>
      <input
        placeholder="Add your Task Here"
        ref={inputRef}
        maxLength={25}
        type="text"
        className="ToDoList_input"
        onFocus={() => setRenderSearchIcon(true)}
      />
      {renderSearchIcon && (
        <img
          onClick={(e) => addTask(e)}
          className="ToDoList_search_icon"
          src={search_icon}
        />
      )}
    </motion.div>
  );
}

export default TaskContainer;
