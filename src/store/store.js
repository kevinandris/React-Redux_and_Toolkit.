import { storeCreator } from "redux";

// ! 2) Reducer
const countReducer = (state = 0, action) => {
    if (action.type === "SUBTRACT") {
        return state - 1
    }
    if (action.type === "ADD") {
        return state + 1
    }
    if (action.type === "RESET") {
        return state = 0
    }
};

// ! 1) create a store
const store = storeCreator(countReducer);

export default store;
