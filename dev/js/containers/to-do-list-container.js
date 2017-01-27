/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ToDoList from '../components/to-do-list'
import {fetchTasks, fetchTasksSuccess, fetchTasksFailure} from '../actions/index-actions'

const mapStateToProps = (state) => {
    return {
        tasksList: state.tasks.tasksList
    };
}
const matchDispatchToProps = (dispatch) => {
    return {
        fetchTasks: () => {
            dispatch(fetchTasks()).then((response) => {

                !response.error ? dispatch(fetchTasksSuccess(response.payload.data)) : dispatch(fetchTasksFailure(response.payload.data));
            })
        }

    }

}
export default connect(mapStateToProps, matchDispatchToProps)(ToDoList);
