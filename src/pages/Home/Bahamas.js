import React from 'react';
import './Egypt.css'
import {Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const Bahamas = () => {
    return (
      <div>
      <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <Card sx={{ width: '800px', mt: '100px' }}>
    <h5>BAHAMAS</h5>  
      <CardContent>
      <img
        src="images/img-2.jpg"
        alt="green iguana"
        float="left"
      />
      <p>Weather: lalala</p>
      <p>Population: 123123;</p>
      <p>Sightseeing: qqqqqqqqqq; </p>
      <p> Area: 234234;</p>
      </CardContent>
    </Card>
  </Container>
  <div className="text">
   <h7>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</h7>
   </div>
      </div>
    )
}


export default Bahamas;