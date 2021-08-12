import React from "react";
import "./Hero.css";
import { Button } from "../Button/Button";
import video1 from "../../videos/video-1.mp4";
/*import video2 from "../../videos/video-2.mp4"; */

function Hero() {
    return (
        <div className="hero-container">
            <video src={video1} autoPlay loop muted />
            /* */
            <h1>Breakfast at Tinkerbell’s</h1>
            <p>We are an online vegan dog bakery based in Dorset whipping up a delicious selection of </p>
            <p>cakes, doggy treats and much more!!!</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Menu
                </Button>

                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    Our treats <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    );
}

export default Hero;
