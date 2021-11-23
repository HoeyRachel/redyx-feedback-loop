import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';

function support() {
    //const reducerName = useSelector (store => store.reducerName);
    const feedback = useSelector (store => store.feedback);
    console.log ('IN Feedback-------->',feedback);

    const dispatch = useDispatch ();

    const [support, setSupport] = useState('');
    const [enableButton, setEnableButton ]= useState(true);//enabling the next button
   
    
    const getSupport = (event)=>{
        console.log ('in getSupport:', event.target.value);
        setSupport(event.target.value);
        //make sure that value is entered in the dropdown box or next button will not work
        if(event.target.value != ''){
            setEnableButton(false)
      }
    }

    return (
        <div className="support">
            <h1>How well are you being supported?</h1>
            <h3>Select a value below</h3>
            <InputLabel>Support?</InputLabel>
            <Button
                variant ="outlined" 
                size="medium" 
                color="primary" 
                component = {Link}
                to="/understanding"
                onClick = {()=>dispatch({type: 'ADD_SUPPORT', payload: support})}>Back
            </Button>
            <Select
            value= {support}
            onChange={(event)=>getSupport(event)}
            >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
            </Select>

            <Button
            disabled = {enableButton} 
            variant ="outlined" 
            size="medium" 
            color="primary" 
            component = {Link}
            to="/comments"
            onClick = {()=>dispatch({type: 'ADD_SUPPORT', payload: support})}>Next</Button>
</div>
    )
}

export default support;