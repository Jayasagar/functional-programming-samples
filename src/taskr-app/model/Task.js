import {cyan} from 'colors';

// Return array of tasks
export const toTasksArray = (tasks) => Object.keys(tasks).map((uuid) => tasks[uuid]);

export const notDone = ({status}) => status !== 'done';

export const displayTask = ({description, due, status}) => {
  const s = status === 'done' ? 'Done!' : `Due ${new Date(due).toUTCString()}`;
  console.info(cyan(`* ${description} - ${s}`));
};
