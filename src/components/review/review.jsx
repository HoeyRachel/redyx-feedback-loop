import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import axios from 'axios';



function review(props) {
    //const reducerName = useSelector (store => store.reducerName);
    const dispatch = useDispatch ();
    const feedback = useSelector (store => store.feedback);
    
    
    const handlePost = () =>{
        console.log( 'in handlePost' );
        axios.post( `/feedback`, feedback ).then( (response)=>{
            //send a dispatch to empty out the store
            dispatch({ type: 'EMPTY_REDUCER' });
          }).catch((err)=>{
             alert('POST Failed');
             console.log(err);
          });
    }
    
    return (
        <div className="review">

            <h1>Review Your Feedback</h1>
            <h2>Feelings: {feedback.Feelings}  </h2>
            <h2>Understanding: {feedback.Understanding} </h2>
            <h2>Support: {feedback.Support} </h2>
            <h2>Comments: {feedback.Comments}</h2>
            <Button 
            variant="outlined" 
            size="large" 
            color="secondary" 
            style={{fontSize: 18}} 
            component = {Link}
            to="/success"
            onClick={handlePost}> Submit Feedback
            </Button>
            
        </div>
    )
}

export default review;