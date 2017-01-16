/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {addTask} from '../actions/index';

class ToDoList extends Component {

    createTableRows(){
        return this.props.tasks.map((task) => {
            return (
                <tr>
                    <td>{task.name}</td>
                    <td>{task.created}</td>
                    <td>{task.modified}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                </tr>


            );
        });
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Last Modified</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
                {this.createTableRows()}
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    };
}
export default connect(mapStateToProps)(ToDoList);
