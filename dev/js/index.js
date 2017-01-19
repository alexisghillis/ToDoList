import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import allReducers from './reducers/index-reducers';
import App from './components/to-do-list-component';
import AddToDo  from './components/add-to-do-component';
import { Router, Route, Link, browserHistory, IndexRoute,hashHistory  } from 'react-router'
const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
       <Router history={hashHistory}>
           <Route path="/" component={App}/>
           <Route path="/add" component={AddToDo}/>
       </Router>
    </Provider>,document.getElementById('root')
);
