import {uuid, copy, INITIAL_STATE} from './../core';

// Typical reducer acts as a compute application state
const reducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type) {
        case 'addTask': {
          const id = uuid();
          return copy(state, {
            tasks: copy(state.tasks, {
              [id]: copy(payload, {uuid: id, status: 'todo'}),
            }),
          });
        }
    }
    return state;
}

export default reducer;