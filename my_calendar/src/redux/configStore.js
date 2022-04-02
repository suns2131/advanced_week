import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import ym_state from "./modules/ym_state";

const rootReducer = combineReducers({ym_state});
// const middlewares = [thunk];
// const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer);

export default store;

