/**
 * Created by alexis-toma.ghillis on 1/25/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTask} from '../actions/index-actions';
import {changeStatus} from '../actions/index-actions';

class ToDoList extends Component {

    componentWillMount() {
        this.props.fetchTasks();
    }

    renderTableRows() {
        //descending sort followed by data population
        return this.props.tasksList.tasks.sort((a,b) => {
            return a.id - b.id
        }).map((task) => {
            return (
                <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.created}</td>
                    <td>{task.modified}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>
                        <input type="button" value="X" className="btn btn-primary"
                              // onClick={() => this.props.delTask(task)}
                        />
                    </td>
                    <td>
                        <input type="checkbox"
                               defaultChecked={task.status}
                               onClick={() => this.props.changeStatus(task)}
                        />
                    </td>
                </tr>

            );
        });
    }

    render() {
        return (
            <table className="table table-hover table-bordered">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Last Modified</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>

                {this.renderTableRows()}
                </tbody>
            </table>
        );
    }
}

export default ToDoList;