import React from "react";
import "../App.css";
import Cards from "../Components/Cards/Cards";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";

function Home() {
    return (
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
