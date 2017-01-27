/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React from 'react';
import Header from './to-do-list-header';
import ToDoList from '../containers/to-do-list-container';

require('../../scss/style.scss');


class TaskList extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ToDoList />
            </div>

        )
    }
}

export default TaskList;