import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';

function feelings() {
  ///the next three lines of code are the same on every component. This is a one way road to the store. 
  const feedback = useSelector (store => store.feedback); //looking at index.js for the value of feedback
  console.log ('IN Feedback-------->',feedback);
  const [feelings, setFeelings] = useState('');

  

const [enableButton, setEnableButton ]= useState(true);//enabling the next button


    //functions
    
   
    
    const getFeelings = (event)=>{
        console.log ('in getFeelings:', event.target.value);
        setFeelings(event.target.value);
        //make sure that value is entered in the dropdown box or next button will not work
        if(event.target.value != ''){
          setEnableButton(false)
      }
    }


const dispatch = useDispatch();
    return (
        <div className="feeling">
            <h1>How are you feeling today?</h1>
            <h3>Select a value below</h3>
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
      disabled = {enableButton} 
      variant ="outlined" 
      size="medium"   
      color="primary" 
      component = {Link}
      to="/understanding"
      onClick = {()=>dispatch({type: "ADD_FEELING", payload: feelings})}>NEXT
      {/* //everything inside the ( ) is an action that the dispatch call takes to the store */}
      </Button>
      </div>
    )
}

export default feelings;