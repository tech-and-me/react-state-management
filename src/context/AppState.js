import appContext from './app-context';
import {useState} from 'react'

const AppState = (props) => {
    const [isAuth,setIsAuth] = useState(true);
  return (
    <appContext.Provider value={{
        message: 'Hello from CONTEXT MASTER',
        isAuth,
        setIsAuth
    }}>
        {props.children}
    </appContext.Provider>
  )
}

export default AppState