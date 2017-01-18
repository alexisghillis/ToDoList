
/**
 * Created by alexis-toma.ghillis on 1/13/2017.
 */


import {combineReducers} from 'redux';
import ToDos from './to-do-list-reducer';

const allReducers = combineReducers({
    todos: ToDos
});

export default allReducers;