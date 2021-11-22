import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';


//reducer
//creating a global variable "", that is given a state and action
//every time an action takes place, it will run the reducer

const feedback = (state = {
    Feelings: 0,
    Understanding: 0,
    Support: 0,
    Comments: ''
}, action)=> {
    console.log ('in feedback reducer! Action:', action);
    if (action.type === 'ADD_FEELING'){
        state={...state, Feelings: action.payload}
    }
    else if (action.type === 'ADD_UNDERSTANDING'){
        state={...state, Understanding: action.payload}
    }
    else if (action.type === 'ADD_SUPPORT'){
        state={...state, Support: action.payload}
    }
    else if (action.type === 'ADD_COMMENTS'){
        state={...state, Comments: action.payload}
    }
    console.log (action.type, action.payload);
    return state;
}; //end reducer

const storeInstance = createStore(
    combineReducers(
        {
        feedback

    }
    ),
    applyMiddleware(
      logger
    )
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
 document.getElementById('root'));

registerServiceWorker();
