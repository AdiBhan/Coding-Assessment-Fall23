import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import TaskContainer from "../ToDoList/TaskContainer/TaskContainer";
import "./HomeScreen.scss";

function HomeScreen() {
  const [message, setMessage] = useState("Manage your schedule today! 📝");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const MessageList = [
    " Get your life together! 📝",
    "Stay organized! 📝",
    "Stay on top of your tasks! 📝",
    "Start planning your day! 📝",
  ];

  const addToDoList = () => {
    setIsButtonClicked(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(MessageList[Math.floor(Math.random() * MessageList.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {" "}
      {isButtonClicked && <TaskContainer />}
      <img
        src="https://giffiles.alphacoders.com/209/209153.gif"
        alt="Background"
        className="home_screen_video"
      />
      <motion.div
        initial={{ opacity: 0, y: -1000, rotate: 10 }}
        animate={
          isButtonClicked
            ? { opacity: 0, y: 0, rotate: 0 }
            : { opacity: 1, y: 0, rotate: 0 }
        }
        transition={{ duration: 0.5 }}
        className="home_page_positioning"
      >
        <motion.h1 whileHover={{ scale: 1.05 }} className="home_screen_title">
          TaskRabbit
        </motion.h1>

        <motion.h2 className="home_screen_subtext">{message}</motion.h2>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 1.1 }}
          className="home_screen_button"
          onClick={addToDoList}
          initial={{ opacity: 0, y: -1000, rotate: 10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={isButtonClicked ? { opacity: 0.1 } : { opacity: 1 }}
        >
          Get Started
        </motion.button>
      </motion.div>{" "}
    </>
  );
}

export default HomeScreen;
