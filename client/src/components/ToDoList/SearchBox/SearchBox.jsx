import { motion } from "framer-motion";
import React from "react";
import search_icon from "../../../Icons/search.svg";
import "./SearchBox.scss";

function SearchBox(props) {
  return (
    <div>
      <motion.div className="ToDoList_task_box">
        <input
          placeholder="Add your Task Here"
          ref={props.inputRef}
          maxLength={25}
          type="text"
          className="ToDoList_input"
          onFocus={() => props.setRenderSearchIcon(true)}
        />
        {props.renderSearchIcon && (
          <img
            onClick={(e) => props.addTask(e)}
            className="ToDoList_search_icon"
            src={search_icon}
            alt="your search icon"
          />
        )}{" "}
      </motion.div>
    </div>
  );
}

export default SearchBox;
