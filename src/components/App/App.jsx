import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _feelings from '../_feelings/_feelings';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, } from '@material-ui/core';

function App() {

  const dispatch = useDispatch(); //this code calls the redux listener

  const getFeelings = () => {
    axios.get('/api/feelings').then ((res) => {
      console.log( 'Successful AXIOS GET', res );
      dispatch({
        type: 'GET_FEELINGS_LIST',
        payload: res.data,
      });
    }).catch((err) => {
        console.log('Error in AXIOS GET');
      });

    }
    return (
      <Container>
        <Grid Container>
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
            <Route path="/"element={<_feelings />} ></Route>
          </Routes>
        </BrowserRouter>
      
      </Grid>
      </Container>
    );
  };

  


export default App;
