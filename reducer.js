import {addUser} from './user-core';
import {Map} from 'immutable';

const reducer = (state = Map(), action) => {
    const type = action.type;
    switch(type) {
        case 'ADD_USER' :
        console.log('type', type);
            return addUser(state, action.user);
    }
    return state;
}

export default reducer;