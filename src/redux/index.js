import { createStore, compose } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from './reducers'

const initState ={};
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const store = createStore(rootReducer(), initState, composeFunc());

export default store