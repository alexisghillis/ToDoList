/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */

import axios from 'axios';




import {DELETE_KEY} from '../constants.js'
import {CHANGE_STATUS_KEY} from '../constants.js'
import {ADD_TASK} from '../constants.js'
import {add2doClasses} from '../constants.js'
import {FETCH_TASKS} from '../constants.js'
import {FETCH_TASKS_SUCCESS} from '../constants.js'
import {FETCH_TASKS_FAILURE} from '../constants.js'


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8080/task' : '/task';
export function fetchTasks() {
    const request = axios({
        method: 'get',
        url: `${ROOT_URL}`,
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
//-------------------TO DO
export const changeStatus = (task) => {
    console.log("Changed status for task named: ", task.name);
    return {
        type: CHANGE_STATUS_KEY,
        payload: task
    }
};

export const delTask = (task) => {
    //console.log("Deleted task named: ",task.name);
    return {
        type: DELETE_KEY,
        payload: task
    }
};

export const addTask = () => {
    return {
        type: ADD_TASK,
        payload: () => {
            var item = {};

            var taskName = document.querySelector(add2doClasses[0]).value;
            var taskDescription = document.querySelector(add2doClasses[1]).value;

            item["id"] = "666";
            item["name"] = taskName;
            item["created"] = "11/27/2016";
            item["modified"] = "11/12/2016";
            item["description"] = taskDescription;
            item["status"] = "ceva de test";

            return item;
        }
    }
};

