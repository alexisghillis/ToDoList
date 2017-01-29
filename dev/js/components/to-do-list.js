/**
 * Created by alexis-toma.ghillis on 1/25/2017.
 */
import React, {Component,PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
                              onClick={() => {
                                  this.props.delTask(task.id);
                              }}
                        />
                    </td>
                    <td>
                        <input type="checkbox"
                               defaultChecked={task.status.localeCompare("DONE") == 0}
                               onClick={() => this.props.changeStatus(task.id,task.status.localeCompare("DONE") == 0 ? "NOT DONE" : "DONE" )}
                        />
                    </td>
                </tr>

            );
        })
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