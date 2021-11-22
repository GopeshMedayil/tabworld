import { combineReducers, createStore } from "redux";
import timeZones from "./timeZoneReducer";
import modalReducer from "./modalReducer";
import todoReducer from "./todoReducer";
import { loadState, saveState } from "./localStorage";


const reducer = combineReducers({
  timeZones,
  modalReducer,
  todoReducer
});
const persistedState = loadState();

const store = createStore(reducer, persistedState);

console.log("Actual state ", store.getState());
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
