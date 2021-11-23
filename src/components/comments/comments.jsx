import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
function comments() {
    //const reducerName = useSelector (store => store.reducerName);
    const feedback = useSelector (store => store.feedback);
    console.log ('IN Feedback-------->',feedback);
    const dispatch = useDispatch ();
    const [comments, setComments] = useState('');
   
    
    const addComments = (event)=>{
        setComments(event.target.value);
        console.log ('added comments:', comments);
        
      }

    return (
     <div className="comments">
            <h1>Any comments you want to leave?</h1>
            <h3>Enter comments below</h3>
            <Button className="nextButton"
                variant ="outlined" 
                size="medium" 
                color="primary" 
                component = {Link}
                to="/support"
                onClick = {()=>dispatch({type: "ADD_COMMENTS", payload: comments})}>Back
            </Button>
            <TextField
            label="Write your comments here"
            defaultValue=""
            onChange={(event)=>addComments(event)}
            >
                
            </TextField>

            <Button
            variant ="outlined" 
            size="medium" 
            color="primary" 
            component = {Link}
            to="/review"
            onClick = {()=>dispatch({type: "ADD_COMMENTS", payload: comments})}>Next</Button>
</div>
        
    )
}

export default comments;