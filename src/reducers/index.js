import { combineReducers } from "redux";
import nextId from "./nextId";
import todos from "./todos";

const rootReducer = combineReducers({
  todos: todos,
  nextId: nextId,
});

export default rootReducer;
