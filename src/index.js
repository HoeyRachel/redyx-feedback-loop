import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



//reducer
//creating a global variable. State could be Taco

const feedback = (state = {
    //allows us to pass multiple values once via an object
    Feelings: '',
    Understanding: '',
    Support: '',
    Comments: ''
     //action can be taco. It's an argument that can be used inside function. 
    //  NOTE! The dispatch call with the type and payload is carrying the action from other 
    // components to our index (because that's where the store lives)
}, action)=> {
    console.log ('in feedback reducer! Action:', action);
    // if the action type carried over from a component is named 'ADD_FEELING'
    if (action.type === 'ADD_FEELING'){
        // set state to everything state is, except feeling. Where you find feeling(in our state object), 
        // replace the property value with action.payload
        state={...state, Feelings: action.payload}
        return state;
    }
    else if (action.type === 'ADD_UNDERSTANDING'){
        state={...state, Understanding: action.payload}
        return state;
    }
    else if (action.type === 'ADD_SUPPORT'){
        state={...state, Support: action.payload}
        return state;
    }
    else if (action.type === 'ADD_COMMENTS'){
        state={...state, Comments: action.payload}
        return state;
    }
    else if( action.type === 'EMPTY_REDUCER' ){
        state={}
    }
   
console.log (action.type, action.payload);
return state; //end reducer
};
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
