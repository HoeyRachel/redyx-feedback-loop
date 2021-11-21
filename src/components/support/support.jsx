import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';

function support() {
    //const reducerName = useSelector (store => store.reducerName);
    const feelingsReducer = useSelector (store => store.feelingsReducer);

    const dispatch = useDispatch ();

    const [support, setSupport] = useState('');
   
    
    const getSupport = (event)=>{
        console.log ('in getSupport:', event.target.value);
        setSupport(event.target.value);
      }

    return (
        <div class="support">
            <h1>How well are you being supported?</h1>
            <InputLabel>Support?</InputLabel>
            <Select
            value= {support}
            onChange={getSupport}
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
            </Select>

            <Button
            variant ="outlined" 
            size="medium" 
            color="primary" 
            component = {Link}
            to="/comments"
            onClick = {()=>dispatch({type: "ADD_SUPPORT", payload: support})}>Next</Button>
</div>
    )
}

export default support;