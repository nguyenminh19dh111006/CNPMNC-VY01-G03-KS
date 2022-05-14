import React, { useState, useEffect, useRef } from "react";

import Header from "../Global/Header";
import Footer from "../Global/Footer";
import HotelItemDetail from "./HotelItemDetail";



function Hotel() {
    
    return (
        <>
            <Header />
            <div className="pt-16 flex-wrap xl:px-32">

            <HotelItemDetail/>
            </div>
            
            <Footer />
        </>
    );
}

export default Hotel;
