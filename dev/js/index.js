import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers/index-reducers';
import TaskList from './components/index-to-do-list-component';
import AddToDo  from './components/add-to-do-component';
import { Router, Route, browserHistory } from 'react-router'
import promise from 'redux-promise';

// Middleware you want to use in production:
const enhancer = applyMiddleware(promise);

const store = createStore(allReducers, {},  enhancer);

ReactDOM.render(
    <Provider store={store}>
       <Router history={browserHistory}>
           <Route path="/" component={TaskList}/>
           <Route path="/add" component={AddToDo}/>
       </Router>
    </Provider>,document.getElementById('root')
);
