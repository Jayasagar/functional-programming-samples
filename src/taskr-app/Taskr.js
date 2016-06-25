import {today, tomorrow, nextWeek} from './utils/Time';
import {cyan, red, green} from 'colors';
import {toTasksArray, displayTask, notDone} from './model/Task';
import {INITIAL_STATE} from './core';
import reducer from './reducer/reducer';

export const Taskr = {
  /**
   * List of actions.
   *
   * @private
   */
  actions: [],

  appState: null,

  /**
   * Indicates current time.
   *
   * @private
   */
  time: 0,

  /**
   * Dispatches an `action` provided in argument if application is not in time travel mode.
   *
   * @private
   */
  dispatch(action) {
    if (this.actions.length !== this.time) {
      console.info(red('You are in time travel/debug mode'));
      console.info(red('Dispatching is locked, rewind to last action'));
      return;
    }

    this.actions = this.actions.concat([action]);
    const state = this.appState || INITIAL_STATE;

    // Compute the Application State with the given action
    this.appState = reducer(state, action);
    this.time = this.actions.length;

    console.log('Taskr.dispatch.state', this.appState, 'Task.dispatch.action', action);
  },

  viewAllActions() {
    const {actions: {length}} = this;
    console.info(cyan('View - All Actions'));
    console.info(green(`Number of actions: ${length}`));

    return true;
  },

  viewNumAllTasks() {
    const {tasks} = this.appState;

    console.info(cyan('View - Number of Tasks'));
    console.info(green(`Number of tasks: ${Object.keys(tasks).length}`));
  },

  viewAllTasks() {
    console.info(cyan('View - All Tasks'));
    const {tasks} = this.appState;

    toTasksArray(tasks)
      .forEach(displayTask);
  },

  viewForecast(untill = tomorrow()) {
    console.info(cyan('View - Forecast'));
    const {tasks} = this.appState;

    toTasksArray(tasks)
      .filter(notDone)
      .filter(before(untill))
      .forEach(displayTask);
  },
};