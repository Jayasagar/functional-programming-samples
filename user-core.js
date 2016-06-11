
import {Map, List} from 'immutable';

export const addUser = (state, user) => {
    console.log(state);

    if (state.has('users')) {
        const newUsers = state.get('users').push(user);
        return state.set('users', newUsers);
    } else {
        return state.set('users', List().push(user));
    }
}