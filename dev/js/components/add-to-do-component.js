/**
 * Created by alexis-toma.ghillis on 1/18/2017.
 */

import React, {Component,PropTypes} from 'react';
import { Link } from 'react-router'
import {add2doClasses} from '../constants'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
                               onClick={() => {this.props.addTask(createNewTask.payload)}} />
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default AddToDo;

export const createNewTask = () => {
    return {
        payload: () => {
            var item = {};

            var taskName = document.querySelector(add2doClasses[0]).value;
            var taskDescription = document.querySelector(add2doClasses[1]).value;

            item["id"] = "666";
            item["name"] = taskName;
            item["created"] = "11/27/2016";
            item["modified"] = "11/12/2016";
            item["description"] = taskDescription;
            item["status"] = "ceva de test";

            return item;
        }
    }
};