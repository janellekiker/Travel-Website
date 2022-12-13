import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
//import waterfall from "../assets/images/waterfall.jpg";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={"/assets/images/waterfall.jpg"}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={"images/img-2.jpg"}
              text="Travel through the islands of Bali in a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
