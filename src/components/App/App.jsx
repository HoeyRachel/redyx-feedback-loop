import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feelings from '../feelings/feelings';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Box, Container, Typography, Grid, } from '@material-ui/core';
import Understanding from '../understanding/understanding';
import Support from '../support/support';
import Comments from '../comments/comments';
import Review from '../review/review';

function App() {

  const dispatch = useDispatch(); //this code calls the redux listener


  return (
    <Container>
      <Grid container>
        <Grid item xs ={1}></Grid>
        <Box p={5}>
          <img className="image" src="https://cdn.pixabay.com/photo/2017/12/27/12/41/sketch-3042584_960_720.jpg"/>
        </Box>
        </Grid>
        <Grid item xs = {8}>
               <Typography variant="h3"align="center" color="secondary">Feedback!</Typography>
         <br></br>
               <Typography variant="h5"align="center" color="primary">Don't Forget it!</Typography>
        <Grid/>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Feelings />} ></Route>
          <Route path="/understanding" element={<Understanding />}></Route>
          <Route path="/support" element={<Support/>} ></Route>
          <Route path="/comments" element={<Comments/>} ></Route>
          <Route path="/review" element={<Review/>} ></Route>
        </Routes>
      </BrowserRouter>
    
    </Grid>
    </Container>
  );
      

    }
    
 

  


export default App;
