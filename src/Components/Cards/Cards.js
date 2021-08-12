import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../../images/batimg-1.jpg";
import img2 from "../../images/batimg-2.jpg";
import img3 from "../../images/batimg-3.jpg";
import img4 from "../../images/batimg-4.jpg";
import img5 from "../../images/batimg-5.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these DELICIOUS treats!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={img1} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" label="Ice cream?!" path="/services" />
                        <CardItem src={img2} text="Travel through the Islands of Bali in a Private Cruise" label="Doggy treats" path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={img3} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" label="Birthday cakes" path="/services" />
                        <CardItem src={img4} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" label="Impawsible cookies" path="/products" />
                        <CardItem src={img5} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" label="Cupcakes" path="/sign-up" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
