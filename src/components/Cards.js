import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image9 from "../assets/images/img-9.jpg";
import image2 from "../assets/images/img-2.jpg";
import image3 from "../assets/images/img-3.jpg";
import image4 from "../assets/images/img-4.jpg";
import image8 from "../assets/images/img-8.jpg";

function Card() {
  return (
    <div className="cards">
      <h1>Check out these epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              // TODO fix image link
              src={image9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              // TODO fix image link
              src={image2}
              text="Travel through the islands of Bali in a private cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              // TODO fix image link
              src={image3}
              text="Set sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              // TODO fix image link
              src={image4}
              text="Experience football on top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              // TODO fix image link
              src={image8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
