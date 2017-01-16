/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */

export const addTask = (task) => {
    console.log("Added a task: ", task.name);
    return {
        type: "ADD_TASK",
        payload: task
    }
};