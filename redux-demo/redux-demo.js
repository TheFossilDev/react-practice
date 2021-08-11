const redux = require('redux');


const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

// init store
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// Dispatches action (js obj)
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });