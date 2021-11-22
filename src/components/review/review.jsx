import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import axios from 'axios';


function review(props) {
    //const reducerName = useSelector (store => store.reducerName);
    const feedback = useSelector (store => store.feedback);
    
    const dispatch = useDispatch ();

    useEffect(() => {
        feedbackId();
      }, []);
    
     let feedbackIds = [];
     const feedbackId = () => {
        for (let i = 0; i < feedback.length; i++) {
          feedbackIds.push({
            id: feedback[i].id,
            quantity: 1
          });
        }
      }
      const [newFeedback, setNewFeedback] = useState({
        feelings: feedback.feelings,
        understanding: feedback.understanding,
        support: feedback.support,
        comments: feedback.comments,
       
        
        //pizzas brings in the pizzaId array 
        // pizzas: pizzaIds
      })

   
    const handlePost = () =>{
        console.log( 'in handlePost' );
        axios.post( `/`, feedback).then( (response)=>{
            //send a dispatch to empty out the store
            dispatch({ type: 'EMPTY' });
          }).catch((err)=>{
             alert('POST Failed');
             console.log(err);
          });
    }
    return (
        <div className="review">
            <h1>Review Your Feedback</h1>
            <h2>Feelings: {newFeedback.feeling}  </h2>
            <h2>Understanding: {newFeedback.understanding} </h2>
            <h2>Support: {newFeedback.support} </h2>
            <h2>Comments: {newFeedback.comments}</h2>
            <Button 
            variant="outlined" 
            size="large" 
            color="secondary" 
            style={{fontSize: 18}} 
            onClick={handlePost}> SUBMIT
            </Button>
            {/* feedback.map(pizza => (<CheckOutItem className="itemBox" pizza={pizza} key={pizza.id} />)) */}
        </div>
    )
}

export default review;