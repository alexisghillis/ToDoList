
import {DELETE_KEY} from '../constants.js'
import {CHANGE_STATUS_KEY} from '../constants.js'
import {ADD_TASK} from '../constants.js'

import {
    FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, RESET_TASKS
} from '../constants';


const INITIAL_STATE = { tasksList: {tasks: [], error:null, loading: false}
};

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case FETCH_TASKS:// start fetching tasks and set loading = true
            return { ...state, tasksList: {tasks:[], error: null, loading: true} }
        case FETCH_TASKS_SUCCESS:// return list of tasks and make loading = false
            return { ...state, tasksList: {tasks: action.payload, error:null, loading: false} }
        case FETCH_TASKS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, tasksList: {tasks: [], error: error, loading: false} }
        case RESET_TASKS:// reset ToDoList to initial state
            return { ...state, tasksList: {tasks: [], error:null, loading: false} }
        case CHANGE_STATUS_KEY: //returns the status of the
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    el.status = !el.status;
                }
                return el;
            });
        case ADD_TASK:
            console.log(action.payload);
            return () => {
                Object.assign({}, state.push(action.payload));
            };
        case DELETE_KEY:
            return state.filter((el) => {
                return el.id !== action.payload.id;
            });
        default:
            return state;
    }
}

