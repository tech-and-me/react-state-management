import Home from "./components/Home";
import Feed from "./components/Feed";
import AppState from "./context/AppState";

function App() {
  return (
    <div className="App">
      <h1>Context Example</h1>
      <hr />
      <AppState>
        <Home/>
        <hr />
        <Feed/>
        <hr/>
      </AppState>
      
    </div>
  );
}

export default App;
