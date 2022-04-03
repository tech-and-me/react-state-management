import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInputFolder/TodoInput";
import TodoList from "./components/TodoListFolder/TodoList";

import TodoContextDefinition from "./contextFolder/todoContextDefinition";


function App() {
  return (
    <div className="app">
      <div className="app__todoApp">
        <TodoContextDefinition>
        <TodoInput />
          <TodoList />
        </TodoContextDefinition>
      </div>
    </div>
  );
}

export default App;