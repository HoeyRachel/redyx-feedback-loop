import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';


function admin() {
    //const reducerName = useSelector (store => store.reducerName);
    const dispatch = useDispatch ();

    return (
        <div>
            <h1>admin</h1>
        </div>
    )
}

export default admin;