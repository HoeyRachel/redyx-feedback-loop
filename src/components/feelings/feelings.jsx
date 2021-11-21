import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';

function feelings() {
    const feelingsReducer = useSelector (store => store.feelingsReducer);

    // const feelings = useSelector (store => store.feelings);

    //set selector to start at 0
   
    const [feelings, setFeelings] = useState('');
   
    
    const getFeelings = (event)=>{
        console.log ('in getScore:', event.target.value);
        setFeelings(event.target.value);
      }

//make sure that value is entered in the dropdown box or next button will not work

//next button should link to understanding page.
const dispatch = useDispatch();
    return (
        <div class="feeling">
            <h1>How are you feeling today?</h1>
            <InputLabel>Feeling? </InputLabel>
      <Select
      value={feelings}
      onChange={ getFeelings }
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
      to="/understanding"
      onClick = {()=>dispatch({type: "ADD_FEELING", payload: feelings})}>NEXT
      </Button>
      </div>
    )
}

export default feelings;