/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React from 'react';
import ToDoList from '../containers/to-do-list';
require('../../scss/style.scss');


const App = () => (
    <div>
        <h2> To Do List </h2>
        <ToDoList />
        <hr/>
    </div>
);

export default App;