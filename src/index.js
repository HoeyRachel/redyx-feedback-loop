import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

//reducer
//creating a global variable "", that is given a state and action
//every time an action takes place, it will run the reducer

const feelingsReducer = (state = [], action)=> {
    if (action.type === 'GET_FEELINGS_LIST'){
        return action.payload;
    }
    return state;
}; //end reducer

const storeInstance = createStore(
    combineReducers(
        {
        feelingsReducer

    }
    ),
    applyMiddleware(
      
    )
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
 document.getElementById('root'));

registerServiceWorker();
