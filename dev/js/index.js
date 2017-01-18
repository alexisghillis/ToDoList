import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import allReducers from './reducers/index-reducers';
import App from './components/to-do-list-component';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,document.getElementById('root')
);
