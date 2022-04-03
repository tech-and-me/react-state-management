import React, { useContext } from "react";
import styles from "./TodoList.module.css";
import todoContextSetUp from "../../contextFolder/todoContextSetUp";
import TodoItem from "./TodoItemFolder/TodoItem";
import { DELETE_TODO, TOGGLE_TODO } from "../../contextFolder/todoAction";

const TodoList = () => {
  const {todos,toggleTodo,deleteTodo} = useContext(todoContextSetUp)
  
  return (
    <div className={styles.todoList}>
      <h3 className={styles.todoList__title}>TO-DOS</h3>
      <div className={styles.todoList__todos}>
       {todos.map(todo => (<TodoItem key={todo.id} text={todo.text} complete={todo.complete}  clickToDelete={()=>deleteTodo(todo.id)} clickTotoggle={()=>toggleTodo(todo.id)}/>))}
      </div>
    </div>
  );
};

export default TodoList;