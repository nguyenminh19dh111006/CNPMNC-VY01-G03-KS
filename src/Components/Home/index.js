import React, { useEffect } from "react";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import Hero from "./Hero";

function Home() {
    useEffect(() => {
        document.title = `VY1-G03-KHACHSAN`;
    }, []); 
    return (
        <>
            <Header />

            <Hero />

            <Footer />
        </>
    );
}

export default Home;
