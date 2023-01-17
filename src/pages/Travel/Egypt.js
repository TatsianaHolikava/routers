import React from "react";
import { Container } from "@mui/material";
import "./TravelCard.css";

const Egypt = () => {
  return (
    <div>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <div class="container">
          <div class="image">
            <img src="images/egypt.jpg" />
          </div>
          <div class="text">
            <h2>EGYPT</h2>
            <hr />
            <p>Religion: Roman Catholicism (34.4%)</p>
            <p>Population: 8,703 million;</p>
            <p>Area: 41,285 km²;</p>
            <p>Sightseeing: qqqqqqqqqq; </p>
          </div>
        </div>
      </Container>
      <div className="info">
        <h4>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </h4>
      </div>
    </div>
  );
};

export default Egypt;
