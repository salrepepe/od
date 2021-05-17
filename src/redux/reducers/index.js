import { combineReducers } from "redux";
import funcReducer from './funcReducer';

const rootReducer = () => combineReducers({funcReducer});

export default rootReducer;