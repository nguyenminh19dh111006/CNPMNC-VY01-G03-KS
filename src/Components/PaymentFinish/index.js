import React, { useState, useEffect, useRef } from "react";
import Header from "../Global/Header";
import Footer from "../Global/Footer";
import PaymentFinishing from "./PaymentFinishing";



function PaymentFinish() {
    
    return (
        <>
            <Header />
            
            <PaymentFinishing/>
            
            <Footer />
        </>
    );
}

export default PaymentFinish;
