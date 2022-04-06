import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Post from "./container/Post";
import Signup from "./container/Signup";
import { ConnectedRouter, connectRouter } from "connected-react-router";
import {history} from './redux/configstroe'
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "./redux/modules/set_user"
import { APIKEY } from "./shared/firebase";
import React from "react";
import Detail from "./container/Detail";

function App() {
  const dispatch = useDispatch();
  const session_key = `firebase:authUser:${APIKEY}:[DEFAULT]`;
  const is_sesstion = sessionStorage.getItem(session_key)? true : false;

  React.useEffect(() => {
    if(is_sesstion){
      dispatch(userActions.loginCheckFB())
    }
  },[])

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Route path={'/'} exact component={Home} />
        <Route path={'/Signup'} exact component={Signup} />
        <Route path={'/Login'} exact component={Login} />
        <Route path={'/Post'} exact component={Post} />
        <Route path={'/Detail'} exact component={Detail} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
