import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _feelings from '../_feelings/_feelings';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const dispatch = useDispatch(); //this code calls the reduc listener

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
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/"element={<_feelings />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };

  


export default App;
