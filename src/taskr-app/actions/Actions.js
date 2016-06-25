export const addTask = (description, due) => ({type: 'addTask', payload: {description, due}});

export const completeTask = (uuid) => ({type: 'completeTask', payload: {uuid}});

export const removeTask = (uuid) => ({type: 'removeTask', payload: {uuid}});
