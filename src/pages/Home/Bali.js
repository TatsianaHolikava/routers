import React from 'react';
import './SeparateCard.css'
import {Container} from "@mui/material";



const Bali = () => {
    return (
      <>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div classname="card__container">
              <div className="card__header">
                <h1>Bali</h1>
                <div className="card__image">
                  <img
                    src="images/img-2.jpg"
                    alt="travel"
                    width="300"
                    height="300"
                  />
                    <p> Weather: lalala;
                    Religion: aladwdw;
                    Population: 123123;
                    Area: 234234;
                    Sightseeing: qqqqqqqqqq, eeeeeee, cfffffffff, ssssssssss, bbbbb;
                    </p>
                </div>
              <div className="card__info">
                <h5>LOREM IPSUM</h5>
              </div>
            </div>
            </div>
          </Container>
      </>
    );
};

export default Bali;