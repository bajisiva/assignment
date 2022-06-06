import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Get from "./Get";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";
import { Route, Link } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/get">
        <Get />
      </Route>
      <Route path="/post">
        <Post />
      </Route>
    </div>
  );
}

export default App;
