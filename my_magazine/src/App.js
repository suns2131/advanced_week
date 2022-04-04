import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Post from "./container/Post";
import Signup from "./container/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/Signup'} exact component={Signup} />
        <Route path={'/Login'} exact component={Login} />
        <Route path={'/Post'} exact component={Post} />
      </Switch>
    </div>
  );
}

export default App;
