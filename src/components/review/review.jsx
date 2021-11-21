import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';


function review() {
    //const reducerName = useSelector (store => store.reducerName);
    const dispatch = useDispatch ();

    return (
        <div>
            <h1>review</h1>
        </div>
    )
}

export default review;