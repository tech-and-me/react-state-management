import appContext from "../context/app-context"
import { useContext } from "react"

const Feed = () => {
  const {message} = useContext(appContext);

  return (
    <div style={{background:"cyan",padding:"1rem"}}>
      <h1>This is Feed Component</h1>
      <p>This message from global context : {message}</p>
    </div>
  )
}

export default Feed