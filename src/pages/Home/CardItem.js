import React from "react";
import { Link } from "react-router-dom";

const CardItem = () => {
  return (
    <div>
      <li classNmae = "cards__item">
      <Link className="cards__item__link" to="/first">
      <figure className="cards__item_pic-wrap">
      <img src="" alt="Travel Image"
      className="cards__item__img"/>
      </figure>
        <div className="cards__item__info">
        <h5 className="cards__item__text"></h5>
        </div>
      </Link>
      </li>
    </div>
  );
};

export default CardItem;
