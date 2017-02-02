/**
 * Created by alexis-toma.ghillis on 2/1/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddToDo from '../components/add-to-do-component'
import {fetchTasks, fetchTasksSuccess, fetchTasksFailure} from '../actions/index-actions'
import {addTask, addTaskSuccess, addTaskFailure} from '../actions/index-actions'


const mapStateToProps = (state) => {
    return {
        newTask: state.tasks.newTask
    };
}


const matchDispatchToProps = (dispatch) => {
    return {

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

export default connect(mapStateToProps, matchDispatchToProps)(AddToDo);