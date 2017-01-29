
import {
    ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAILURE
} from '../constants';

import {
    DELETE_TASK,DELETE_TASK_SUCCESS,DELETE_TASK_FAILURE
} from '../constants';

import {
    FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE
} from '../constants';

import {
    CHANGE_STATUS, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_FAILURE
} from '../constants';

const INITIAL_STATE = { tasksList: {tasks: [], error:null, loading: false},
                        deletedTask: {post: null, error:null, loading: false},
};

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        //===================FETCH TASKS=========================================================////////

        case FETCH_TASKS:// start fetching tasks and set loading = true
            return { ...state, tasksList: {tasks:[], error: null, loading: true} }

        case FETCH_TASKS_SUCCESS:// return list of tasks and make loading = false
            return { ...state, tasksList: {tasks: action.payload, error:null, loading: false} }

        case FETCH_TASKS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, tasksList: {tasks: [], error: error, loading: false} }

        //===================DELETE TASK=========================================================////////
        case DELETE_TASK:// start deleting task and set loading = true
            return { ...state, deletedTask: {...state.deletedTask, loading: true} }

        case DELETE_TASK_SUCCESS:// return task and make loading = false
            return { ...state, deletedTask: {tasks: action.payload, error:null, loading: false} }

        case DELETE_TASK_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, tasksList: {tasks: null, error: error, loading: false} }

        //===================CHANGE TASK=========================================================////////

        case CHANGE_STATUS:// start deleting task and set loading = true
            return { ...state, changedTask: {...state.changedTask, loading: true} }

        case CHANGE_STATUS_SUCCESS:// return task and make loading = false
            return { ...state, changedTask: {tasks: action.payload, error:null, loading: false} }

        case CHANGE_STATUS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, tasksList: {tasks: null, error: error, loading: false} }
        //===================ADD TASK=========================================================////////

        case ADD_TASK:
            return {...state, newTask: {...state.newTask, loading: true}}
        case ADD_TASK_SUCCESS:
            return {...state, newTask: {tasks:action.payload, error:null, loading: false}}
        case ADD_TASK_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, newTask: {tasks:null, error:error, loading: false}}

        default:
            return state;
    }
}

