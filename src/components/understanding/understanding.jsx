import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';

function understanding() {
    //const reducerName = useSelector (store => store.reducerName);
    const feedback = useSelector (store => store.feedback);
    console.log ('IN Feedback-------->',feedback);


    //set selector to start at 0
   
    const [understanding, setUnderstanding] = useState('');
   
    
    const getUnderstanding = (event)=>{
        console.log ('in getUnderstanding:', event.target.value);
        setUnderstanding(event.target.value);
      }
      const dispatch = useDispatch();
//make sure that value is entered in the dropdown box or next button will not work

//next button should link to understanding page.
// const dispatch = useDispatch();
    return (

        <div className="understanding">
            <h1>How well are understanding the content?</h1>
            <InputLabel>Understanding</InputLabel>
                <Button
                variant ="outlined" 
                size="medium" 
                color="primary" 
                component = {Link}
                to="/"
                onClick = {()=>dispatch({type: 'ADD_UNDERSTANDING', payload: understanding})}>Back
            </Button>
            <Select
            value= {understanding}
            onChange={(event)=>getUnderstanding(event)}
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
            to="/support"
            onClick = {()=>dispatch({type: 'ADD_UNDERSTANDING', payload: understanding})}>Next
            </Button>
       
    
      
    
      </div>
    )
};
    

export default understanding;