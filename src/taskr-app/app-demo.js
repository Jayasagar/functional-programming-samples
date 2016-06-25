import {addTask, completeTask} from './actions/Actions';
import {today, tomorrow, nextWeek} from './utils/Time';
import {Taskr} from './Taskr';

// Stream of events i.e. Array of events.
export const streamOfActions = [
   addTask('Write Low Level Documentation for Search Screen', tomorrow()),
   addTask('Write Low Level Documentation for Search and Load operations', tomorrow()),
   addTask('Update meeting agenda', tomorrow()),
   addTask('Fill in timesheets for the week of 10th of June', today()),
   addTask('Fill in timesheets for the week of 16th of June', nextWeek())
];

const simulateApp = () => {
    // Prepare stream of dispatch events
    // add few tasks, completeTask
    Taskr.dispatch(streamOfActions[0]);
    Taskr.viewAllTasks();
};

simulateApp();