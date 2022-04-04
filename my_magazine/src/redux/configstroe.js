import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import post_state from "./modules/post_state";

const rootReducer = combineReducers({post_state});
// const middlewares = [thunk];
// const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer);

export default store;

