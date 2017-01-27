/**
 * Created by alexis-toma.ghillis on 1/18/2017.
 */

import React from 'react';
import { Link } from 'react-router'
import {addTask} from '../actions/index-actions';

//-----TO DO
class AddToDo extends React.Component {
    render(){
        return (
            <table>
                <tbody>
                <tr>
                    <td>
                        <Link to="/"> <input type="button" className="btn btn-primary" value="Back" /> </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <label htmlFor="usr">Name:</label>
                            <input type="text" className="form-control" id="usr" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <label htmlFor="desc">Task description:</label>
                            <textarea className="form-control" rows="5" id="desc"></textarea>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/"><input type="button" className="btn btn-primary" value="Cancel"/></Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="button" className="btn btn-primary" value="Save"
                               onClick={() =>{addTask()}} />
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default AddToDo;