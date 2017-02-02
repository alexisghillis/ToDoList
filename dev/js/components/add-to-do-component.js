/**
 * Created by alexis-toma.ghillis on 1/18/2017.
 */

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class AddToDo extends React.Component {

     createObject(taskName, taskDescription) {
        var item = {};
        item["description"] = taskDescription;
        item["name"] = taskName;
        return item;
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>
                        <Link to="/">
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                            <label htmlFor="usr">Name:</label>
                            <input ref={ref => {
                                this._inputName = ref
                            }} type="input" className="form-control" id="usr" />
                    </td>
                </tr>
                <tr>
                    <td>
                            <label htmlFor="desc">Task description:</label>
                            <textarea ref={ref => {
                                this._inputDesc = ref
                            }} className="form-control" rows="5" id="desc"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/">
                            <button className="btn btn-primary">Cancel</button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/">
                        <button className="btn btn-primary" id="saveButton"
                                onClick={() => {
                                    this.props.addTask(JSON.stringify(this.createObject(this._inputName.value, this._inputDesc.value)));
                                }}> Save
                        </button>
                        </Link>

                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default AddToDo;