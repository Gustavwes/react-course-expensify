import { createStore } from 'redux';

//action generators function that return action objects



const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    // incrementBy: incrementBy  //same as below when both variables are named the same
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});


//Reducers
//1. Reducers are pure functions
// Means that the output is only determined by the input, nothing outside the function scope, nor does it change anything outside the function scope
//2. NEVER change state or action in a reducer

const countReducer = (state = { count: 0 }, action) => { //state is the current state, the brackets after set the default if there is no previous state

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }

};

const store = createStore(countReducer);


//this allows you to do something when the stores state changes
store.subscribe(() => {
    console.log(store.getState());
});

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// })
// Actions - an object that gets sent to the the store
// e.g. increment, decrement, reset

//increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();
store.dispatch(incrementCount());

store.dispatch(resetCount());


store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
//presumably i can export the store, and then use functions on the store.