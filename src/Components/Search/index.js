import React, { useState, useEffect, useRef } from "react";

import Header from "../Global/Header";
import Footer from "../Global/Footer";
import SearchForm from "./SearchForm";
import HotelItem from "./HotelItem";



function Search() {
    
    return (
        <>
            <Header />
            <div className="p-8 flex flex-wrap xl:px-32">
            <SearchForm/>
                
            <HotelItem/>
            </div>
            
            <Footer />
        </>
    );
}

export default Search;
