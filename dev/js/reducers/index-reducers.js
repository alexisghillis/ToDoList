
/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */


import {combineReducers} from 'redux';
import ToDoList from './to-do-list-reducer';

const allReducers = combineReducers({
    tasks: ToDoList
});

export default allReducers;