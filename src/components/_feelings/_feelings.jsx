import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';

function _feelings() {
    //const reducerName = useSelector (store => store.reducerName);

    const feelings = useSelector (store => store.feelings);
    
    const getScore = (event)=>{
        console.log ('in getScore:', event.target.value);
        setScore(event.target.value);
      }
    
    //set selector to start at 0
    const [score, setScore] = useState('');

//make sure that value is entered in the dropdown box or next button will not work

//next button should link to understanding page.


    const dispatch = useDispatch ();

    return (
        <div class="feeling">
            <h1>How are you feeling today?</h1>
            <InputLabel>Feeling? </InputLabel>
      <Select
      value={score}
      onChange={ getScore }
      >
        
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
        <MenuItem value="4">4</MenuItem>
        <MenuItem value="5">5</MenuItem>
      </Select>
      <Button variant ="outlined" size="medium" color="primary">Next</Button>
        </div>
    )
}

export default _feelings;