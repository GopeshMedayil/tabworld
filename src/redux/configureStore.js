import { combineReducers, createStore } from "redux";
import timeZones from "./timeZoneReducer";
import { loadState, saveState } from "./localStorage";


const reducer = combineReducers({
  timeZones
});
const persistedState = loadState();

const store = createStore(reducer, persistedState);

console.log("Actual state ", store.getState());
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
