import React, { useEffect } from "react";
import Header from "../Global/Header";
import PartnerForm from "./partnerform";
import PartnerList from "./PartnerList";
import PostForm from "./PostForm";

function openForm3() {
    document.getElementById("myForm2").style.display = "hidden";
}
function openForm2() {
    document.getElementById("myForm2").style.display = "block";
}

function Partner() {
    useEffect(() => {
        document.title = `PARTNER`;
    }, []); 
    return (
        <>
            <Header />
            
            <div className="p-4 flex flex-wrap">
            <PartnerForm/>
            <button className="bg-blue-300 w-full rounded-lg p-2 outline-none focus:outline-none text-white" onDoubleClick={openForm3} onClick={openForm2}>TẠO MỚI</button>
            <PartnerList/>
            
            <div className=" hidden fixed bg-blue-200 mt-16 ml-64 shadow-lg rounded-lg" id="myForm2">
            <PostForm/>
            </div>
            </div>
        </>
    );
}

export default Partner;