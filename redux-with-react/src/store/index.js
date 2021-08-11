const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'inc') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'dec') {
        return {
            counter: state.counter - 1
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