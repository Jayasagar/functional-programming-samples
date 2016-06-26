import {addTask, completeTask} from './actions/Actions';
import {today, tomorrow, nextWeek} from './utils/Time';
import {Taskr} from './Taskr';

// Stream of events i.e. Array of events.
export const streamOfActions = [
   addTask('Write Low Level Documentation for Search Screen', tomorrow()),
   addTask('Fill in timesheets for the week of 16th of June', nextWeek()),
   addTask('Write Low Level Documentation for Search and Load operations', tomorrow()),
   addTask('Update meeting agenda', tomorrow()),
   addTask('Fill in timesheets for the week of 10th of June', today())
];

const processEvent = (previousEvent, currentEvent) => {
    Taskr.dispatch(previousEvent);
    return currentEvent;
};

const simulateApp = () => {
    // Prepare stream of dispatch events
    // add few tasks, completeTask
    streamOfActions.reduce(processEvent);

//    Taskr.dispatch(streamOfActions[0]);
//    Taskr.dispatch(streamOfActions[1]);
//    Taskr.dispatch(streamOfActions[2]);
//    Taskr.dispatch(streamOfActions[3]);

    Taskr.viewAllTasks();
    Taskr.viewForecast();
    Taskr.viewNumAllTasks();
};

simulateApp();