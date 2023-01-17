import React from 'react';
import {Container} from "@mui/material";
import './Egypt.css'

const Egypt = () => {
    return (
        <div>
            <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div class="container">
      <div class="image">
        <h2>Egypt</h2>
        <img src="images/img-6.jpg"/>
      </div>
      <div class="text">
      <p>Weather: lalala</p>
      <p>Population: 123123;</p>
      <p>Sightseeing: qqqqqqqqqq; </p>
      <p> Area: 234234;</p>
      </div>
    </div>
  </Container>
        </div>
    );
};

export default Egypt;