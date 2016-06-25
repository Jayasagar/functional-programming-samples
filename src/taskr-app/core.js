// Initial App state
export const INITIAL_STATE = {
    tasks: {}
};

// Copy object.
export const copy = (original, changes) => Object.assign({}, original, changes);

// Fake UUID/GUID
export const uuid = () => (Math.round(Math.random() * (Date.now() / 200))).toString(31);

export const before = (untill) => ({due}) => due < untill + 100000; // until should be slightly fuzzy
