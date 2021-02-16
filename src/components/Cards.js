import React from "react";
import CardItem from "./CardItem";
import '../components/Cards.css'
import backgroundImage9 from '../assets/images/img-9.jpg'
import backgroundImage2 from "../assets/images/img-2.jpg";
import backgroundImage1 from "../assets/images/img-1.jpg";
import backgroundImage4 from "../assets/images/img-4.jpg";
import backgroundImage3 from "../assets/images/img-7.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={backgroundImage9}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={backgroundImage2}
              text="Travel through the Islands of Bali in Private Cruise "
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={backgroundImage3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={backgroundImage4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src={backgroundImage1}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
