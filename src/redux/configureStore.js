import { combineReducers, createStore } from "redux";
import timeZones from "./timeZones";
const reducer = combineReducers({
  timeZones
});

const store = createStore(reducer);

export default store;
