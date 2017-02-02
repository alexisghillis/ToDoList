/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */

import axios from 'axios';


import {DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE} from '../constants.js'

import {FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE} from '../constants.js'

import {CHANGE_STATUS, CHANGE_STATUS_SUCCESS, CHANGE_STATUS_FAILURE} from '../constants.js'

import {ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAILURE} from '../constants.js'


const ROOT_URL = 'http://localhost:8080';

//fetch task list
export function fetchTasks() {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}/task`,
        headers: []
    });

    return {
        type: FETCH_TASKS,
        payload: request
    };
}

export function fetchTasksSuccess(tasks) {

    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks
    };
}

export function fetchTasksFailure(error) {
    return {
        type: FETCH_TASKS_FAILURE,
        payload: error
    };
}

//delete task
export const delTask = (id) => {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/task/${id}`,
        headers: []
    });

    return {
        type: DELETE_TASK,
        payload: request
    }
};

export function delTaskSuccess(deletedTask) {
    return {
        type: DELETE_TASK_SUCCESS,
        payload: deletedTask
    };
}

export function delTaskFailure(response) {
    return {
        type: DELETE_TASK_FAILURE,
        payload: response
    };
}

//change task status
export function changeStatus(id, status) {

    const request = axios({
        method: 'put',
        url: `${ROOT_URL}/task/${id}`,
        headers: [],
        data: {
            status
        }
    });

    return {
        type: CHANGE_STATUS,
        payload: request
    };
}

export function changeStatusSuccess(changedTask) {
    return {
        type: CHANGE_STATUS_SUCCESS,
        payload: changedTask
    };
}

export function changeStatusFailure(response) {
    return {
        type: CHANGE_STATUS_FAILURE,
        payload: response
    };
}

export function addTask(task) {
    const request = axios({
        method: 'post',
        data: task,
        url: `${ROOT_URL}/task`,
        headers: {
            "Content-Type": "application/json"
        }
    });

    return {
        type: ADD_TASK,
        payload: request
    };
}

export function addTaskSuccess(newTask) {
    return {
        type: ADD_TASK_SUCCESS,
        payload: newTask
    };
}

export function addTaskFailure(error) {
    return {
        type: ADD_TASK_FAILURE,
        payload: error
    };
}


