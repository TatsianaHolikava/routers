import React from 'react';
import './SeparateCard.css'
import {Container} from "@mui/material";

const Brazil = () => {
    return (
    
        <div>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className="card__container">
                <div className="card__header">
                    <div className="card__image">
                      
                    </div>
                <h1>BRAZIL</h1>
                </div>
            </div>
       
            <div className="card__info">
                <p>LOREM IPSUM</p>
           </div>
           </Container>
        </div>
    
    );
};

export default Brazil;