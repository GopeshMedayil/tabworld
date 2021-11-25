import { combineReducers, createStore } from "redux";
import timeZones from "./timeZoneReducer";
import modalReducer from "./modalReducer";
import todoReducer from "./todoReducer";
import bookmarkReducer from "./bookmarkReducer";
import { loadState, saveState } from "./localStorage";


const reducer = combineReducers({
  timeZones,
  modalReducer,
  todoReducer,
  bookmarkReducer
});
const persistedState = loadState();

const store = createStore(reducer, persistedState);

console.log("Actual state ", store.getState());
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
