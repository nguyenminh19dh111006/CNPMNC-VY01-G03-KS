import React, { useState, useEffect, useRef } from "react";

import Header from "../Global/Header";
import Footer from "../Global/Footer";
import PaymentDetail from "./PaymentDetail";



function Payment() {
    
    return (
        <>
            <Header />
            
            <PaymentDetail/>
            
            <Footer />
        </>
    );
}

export default Payment;
