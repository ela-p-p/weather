import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root'));
