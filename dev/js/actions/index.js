/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */

import {DELETE_KEY} from '../constants.js'

// export const addTask = (task) => {
//     console.log("Added a task: ", task.name);
//     return {
//         type: "ADD_TASK",
//         payload: task
//     }
// };

export const delTask = (task, FullObject ) => {
    console.log("Deleted task named: ",task.name);
    return {
        type: DELETE_KEY,
        payload: task,
        FullObject: FullObject
    }
}