import todoContextSetUp from "./todoContextSetUp"
import {useReducer} from 'react'
import todoReducer from "./todoReducer"
import { ADD_TODO,TOGGLE_TODO,DELETE_TODO } from "./todoAction"


const TodoContextDefinition = (props) => {
  const innitialState ={
    todos:[], // {id:123, text:'some text' complete:false}
  }

  const [state,dispatch] = useReducer(todoReducer, innitialState);

  //Add to do
  const addTodo = (todo) => {
    dispatch({
      type:ADD_TODO,
      payload:todo
    })
  }

  //Delete a to do

  const deleteTodo = (todo) => {
    console.log("fired delete todo");
    console.log("Value of todo is: ", todo);
    dispatch({
      type:DELETE_TODO,
      payload:todo
    })
  }

  //toggle to do
  const toggleTodo = (todoID) => {
    dispatch({
      type:TOGGLE_TODO,
      payload:todoID,
    })
  }

  return (
     <todoContextSetUp.Provider value={{
       todos:state.todos,
       addTodo,
       toggleTodo,
       deleteTodo,
     }}>

         {props.children};
         
     </todoContextSetUp.Provider>
    
  )
}

export default TodoContextDefinition