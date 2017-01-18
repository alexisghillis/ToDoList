/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {delTask} from '../actions/index';

class ToDoList extends Component {

    createTableRows(){
        return this.props.todos.map((task) => {
            return (
                <tr key = {task.id}>
                    <td>{task.name}</td>
                    <td>{task.created}</td>
                    <td>{task.modified}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>
                        <input type="button" value="X" className="btn btn-primary"
                               onClick={() => this.props.delTask(task)}
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

                {this.createTableRows()}
                </tbody>
            </table>
        );
    }
}


function mapStateToProps(state){
    return {
        todos: state.todos
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({delTask: delTask}, dispatch);

}
export default connect(mapStateToProps,matchDispatchToProps)(ToDoList);