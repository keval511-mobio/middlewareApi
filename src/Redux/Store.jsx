import { createStore ,combineReducers,applyMiddleware } from "redux";
import { Reducer } from "./Reducer";
import { thunk } from "redux-thunk";
 

export const Store = createStore(combineReducers({Reducer}),applyMiddleware(thunk))