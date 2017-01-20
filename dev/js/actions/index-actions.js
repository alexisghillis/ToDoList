/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */

import {DELETE_KEY} from '../constants.js'
import {CHANGE_STATUS_KEY} from '../constants.js'
import {ADD_TASK} from '../constants.js'


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

export const createListObject = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
};