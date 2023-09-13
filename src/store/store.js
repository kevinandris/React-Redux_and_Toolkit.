import { createStore } from "redux";

// ! 2) Reducer
const countReducer = (state = 0, action) => {
    if (action.type === "SUBTRACT") {
        return state - 1;
    }
    if (action.type === "ADD") {
        return state + 1;
    }
    if (action.type === "RESET") {
        return (state = 0);
    }

    /* using payload property in dispatch*/
    if (action.type === "ADD_NUMBER") {
        return (state + action.payload);
    }

    return state;
};

// ! 1) create a store
const store = createStore(
    countReducer,
    window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()
);

export default store;
