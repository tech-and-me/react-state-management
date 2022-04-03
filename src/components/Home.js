import appContext from "../context/app-context"
import {useContext} from "react"


const Home = () => {
    const {message,isAuth,setIsAuth} = useContext(appContext);

  return (
      <div style={{background:isAuth ? 'green' : 'red',padding:"1rem"}}>
        <div><h1>This is Home Component</h1></div>
        {isAuth ? (<button onClick={()=>setIsAuth(false)} >Logout</button>) : 
        (<button onClick={()=>setIsAuth(true)} >Login</button>)}
        <p>This is the message from global context {message}</p>
      </div>
  )
}

export default Home