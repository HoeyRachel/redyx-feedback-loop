import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';

function success() {
    //const reducerName = useSelector (store => store.reducerName);
    const dispatch = useDispatch ();

    return (
        <div className="success">
            <h1>Feedback Submitted!</h1>
            <h2>Thank you!</h2>
            <Button 
            variant="outlined" 
            size="large" 
            color="secondary" 
            style={{fontSize: 18}} 
            component = {Link}
            to="/"
            > Start Over
            </Button>
        </div>
    )
}

export default success;