const redux = require('redux');

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
    if (action.type === 'inc') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'dec') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'add') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();  
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'inc' });
store.dispatch({ type: 'dec' });

export default store;