import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import authReducer from "./reducers/authReducer";

// ! 2) Reducer
// ! Combined reducers (We need this because the store from redux could only accept 1 function)
const reducers = combineReducers({
  count: countReducer,
  isLoggedIn: authReducer,
});

// ! 1) create a store
const store = createStore(
  reducers,
  window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION() // ! got this from redux page on Github
);

export default store;
