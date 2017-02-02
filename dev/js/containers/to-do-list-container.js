/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ToDoList from '../components/to-do-list'
import {fetchTasks, fetchTasksSuccess, fetchTasksFailure} from '../actions/index-actions'
import {delTask, delTaskSuccess, delTaskFailure} from '../actions/index-actions'
import {changeStatus, changeStatusSuccess, changeStatusFailure} from '../actions/index-actions'
import {addTask, addTaskSuccess, addTaskFailure} from '../actions/index-actions'

const mapStateToProps = (state) => {
    return {
        tasksList: state.tasks.tasksList,
        deletedTask: state.tasks.deletedTask
    };
}
const matchDispatchToProps = (dispatch) => {
    return {
        fetchTasks: () => {
            dispatch(fetchTasks()).then((response) => {

                !response.error ? dispatch(fetchTasksSuccess(response.payload.data)) : dispatch(fetchTasksFailure(response.payload.data));
            })
        },

        delTask: (id) => {
            dispatch(delTask(id)).then((response) => {
                if (!response.error) {
                    dispatch(delTaskSuccess(response.payload.data));
                    dispatch(fetchTasks()).then((response) => {

                        !response.error ? dispatch(fetchTasksSuccess(response.payload.data)) : dispatch(fetchTasksFailure(response.payload.data));
                    });
                } else {
                    dispatch(delTaskFailure(response.payload.data));
                }
            })
        },

        changeStatus: (id, status) => {
            dispatch(changeStatus(id, status)).then((response) => {
                if (!response.error) {
                    dispatch(changeStatusSuccess(response.payload.data))
                    dispatch(fetchTasks()).then((response) => {

                        !response.error ? dispatch(fetchTasksSuccess(response.payload.data)) : dispatch(fetchTasksFailure(response.payload.data));
                    });
                } else {
                    dispatch(changeStatusFailure(response.payload.data));
                }
            })
        },
        addTask: (task) => {
            dispatch(addTask(task)).then((response) => {
                if (!response.error) {
                    dispatch(addTaskSuccess(response.payload.data));
                    dispatch(fetchTasks()).then((response) => {

                        !response.error ? dispatch(fetchTasksSuccess(response.payload.data)) : dispatch(fetchTasksFailure(response.payload.data));
                    });
                } else {
                    dispatch(addTaskFailure(response.payload.data));
                }
            })
        }
    }

}
export default connect(mapStateToProps, matchDispatchToProps)(ToDoList);
