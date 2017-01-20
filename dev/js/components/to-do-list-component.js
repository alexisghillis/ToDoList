/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */
import React from 'react';
import ToDoList from '../containers/to-do-list-container';
import { Link } from 'react-router'

require('../../scss/style.scss');


class App extends React.Component {
    render() {
        return (
            <div>
            <table>
                <tbody>
                <tr>
                    <td><h2> To Do List </h2></td>
                    <td><Link to="/add"><input type="button" className="btn btn-primary" value="Add To Do" /> </Link> </td>
                </tr>
                </tbody>
            </table>
            <ToDoList />
            <hr/>
        </div>
        )}
}

export default App;