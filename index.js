require('./functional');

require('./functional-user-example');

import {makeStore} from './store';

export const state = makeStore();

state.dispatch({
    type: 'ADD_USER',
    user: {fName: 'Jay', lName: 'JJ', city: 'Frankfurt'}
});


state.dispatch({
    type: 'ADD_USER',
    user: {fName: 'Bob', lName: 'C', city: 'Frankfurt'}
});

console.log('state', state.getState());