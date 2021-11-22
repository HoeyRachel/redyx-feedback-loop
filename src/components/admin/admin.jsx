import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';


function admin() {
    //const reducerName = useSelector (store => store.reducerName);
    const dispatch = useDispatch ();

    return (
        <div className="admin">
            <h1>Review Your Feedback</h1>
            {/* <h2>Feelings: {feedback.feeling}  </h2>
            <h2>Understanding: {feedback.understanding} </h2>
            <h2>Support: {feedback.supprt} </h2>
            <h2>Comments: {feedback.comments}</h2> */}

        </div>
    )
}

export default admin;