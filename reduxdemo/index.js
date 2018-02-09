const { createStore } = require ('redux');

const defaultState = {
    value1: 1,
    value : 0
};

const reducer = (state = defaultState, action) => {
    if (action.type === "UP") {
        return { 
            value: state.value +1,
            value1: state.value1,
        }
    }
    if (action.type === "DOWN") {
        return { 
            value: state.value -1,
            value1 : state.value1,
        }
    }
    if (action.type === "UPUP") {
        return { 
            value : state.value,
            value1 : state.value1 +10
        }
    }

    return state;
};

const store = createStore(reducer);

console.log("truoc " + store.getState().value1);

store.dispatch({ type: "UPUP"});

console.log(store.getState().value1);



store.dispatch({ type: "UP"});
store.dispatch({ type: "UP"});
store.dispatch({ type: "UP"});

console.log("sau " + store.getState().value);

store.dispatch({ type: "UPUP"});

console.log("upup "+ store.getState().value1);
