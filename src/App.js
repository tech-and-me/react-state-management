import {useState,useReducer} from 'react'

const initialValue = {
  count:0,
};
const reducerFunc = (state,action) => {
  switch (action.type){
    case 'increment':
      return {
        ...state,
        count:state.count + 1
      }
    case 'decrement':
      return{
        ...state,
        count:state.count - 1
      }
    case 'init':
      return{
        ...state,
        count:action.payload
      }
      
    default:
      return state
  }
}

const App = () => {
  const [input,setInput] = useState(0);
  const [state,dispatch] = useReducer(reducerFunc,initialValue);

  return (
    <div className="App">
      <h1>Reducer Example</h1>
      <label htmlFor="startCount">Start Count</label>
      <input type='number'
      onChange={(e)=>setInput(parseInt(e.target.value))}
      value={input} /> 
      <button onClick={()=>dispatch({type:"init",payload:input})}>Initialize Counter</button>

      <hr />

      <h1>Current count value is : {state.count}</h1>

      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>
    
  );
}

export default App;
