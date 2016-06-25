// Today
export const today = () => Date.now();

// Tomorrow
export const tomorrow = () => today() + (1000 * 60 * 60 * 24);

// Next Week
export const nextWeek = () => today() + (1000 * 60 * 60 * 24 * 7);
