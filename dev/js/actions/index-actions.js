/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */

import {DELETE_KEY} from '../constants.js'
import {CHANGE_STATUS_KEY} from '../constants.js'
import {ADD_TASK} from '../constants.js'
import {add2doClasses} from '../constants.js'

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

