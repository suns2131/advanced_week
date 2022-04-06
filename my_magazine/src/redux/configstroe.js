import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import post_state from "./modules/post_state";
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import User from "./modules/set_user"
import Post from "./modules/set_post"

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    user : User,
    post : Post,
    router : connectRouter(history),
});
 const middlewares = [thunk.withExtraArgument({history:history})];

 const env = process.env.NODE_ENV;

 if(env === "development"){
     const { logger } = require("redux-logger");
     middlewares.push(logger);
 }

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose; 

 const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = () => createStore(rootReducer, enhancer);

export default store();

