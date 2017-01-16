
/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */


import {combineReducers} from 'redux';
import TaskReducer from './task-data';

const allReducers = combineReducers({
    tasks: TaskReducer
});

export default allReducers;