import React, { useState, useContext } from "react";
import styles from "./TodoInput.module.css";

import todoContextSetUp from "../../contextFolder/todoContextSetUp";


const TodoInput = () => {
  //coponent level state
  const [todo, setTodo] = useState("");

  //global level state (addTodo is the function shared from context)
  const {addTodo} = useContext(todoContextSetUp);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text:todo,
      complete:false
    }
    //addTodo function is shared via todoContextSetUp
    addTodo(newTodo)
    setTodo("");
  }


  return (
    <div className={styles.todoInput}>
      <h3 className={styles.todoInput__title}>
        useCONTEXT + useREDUCER TO-DO LIST
      </h3>
      <form  onSubmit = {onSubmitHandler} className={styles.todoInput__form}>
        <input
          className={styles.todoInput__input}
          type="text"
          onChange={(e)=>setTodo(e.target.value)}    
          placeholder="Enter a Todo..."
          
        />
        <button type="submit" className={styles.todoInput__submitBtn}>ADD</button>
      </form>
    </div>
  );
};

export default TodoInput;
