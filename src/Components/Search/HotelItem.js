import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';


function HotelItem() {
    const [data, setkhachsan] = useState([])
    const [dato, setkhachsanbyhangsao] = useState([])
    const [doto, setdiadiembyid] = useState([])
    
    const rating = localStorage.getItem("SEARCH_INFO");
    const diadiem = localStorage.getItem("SEARCH_INFO");
    
    useEffect(()=>{
        Axios.get('http://localhost:8090/api/khachsan')
        .then(res => {
            console.log("Getting from ::::",res.data)
            setkhachsan(res.data)
        }).catch(err => console.log(err))
    },[])

    useEffect(()=>{
        Axios.get(`http://localhost:8090/api/khachsan/getHangSao/${rating}`)
        .then(res => {
            console.log("Getting from ::::",res.data)
            setkhachsanbyhangsao(res.data)
        }).catch(err => console.log(err))
    },[])

    useEffect(()=>{
        Axios.get(`http://localhost:8090/api/diadiem/getDiaDiem/${diadiem}`)
        .then(res => {
            console.log("Getting from ::::",res.data)
            setdiadiembyid(res.data)
        }).catch(err => console.log(err))
    },[])
    
    
    return  (
        <div>
            {dato && (dato.map(khachsan=>
        <div className="pl-5 pb-4 relative">
            <div className="bg-white shadow-lg  flex flex-col md:flex-row md:justify-between md:items-center rounded-lg overflow-hidden ">
                <div className="md:w-1/6 relative text-sm">
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-full h-40  object-cover"
                        alt="hotel"
                    />
                    
                </div>
                <div className="pr-8 md:w-3/4">
                    <div className="font-semibold text-2xl flex flex-col md:flex-row md:justify-between">
                    {doto && (doto.map(dototo=><div className="float-left">
                            <span>{khachsan.TenKhachSan} Hotel</span>
                            <br/>
                            <span className=" pt-1"><button className="text-blue-500 border-2 border-blue-500 text-sm rounded-lg bg-white pl-1 pr-1">Khách sạn</button>
                            </span>
                            <br/>
                            <span className="text-sm">Địa điểm {diadiem} {dototo.TenDiaDiem}</span>
                        </div>))}
                        <span className="font-normal text-base flex flex-col md:justify-center md:items-end">
                            <span className="text-blue-700 font-semibold">Thanh toán khi nhận phòng</span>
                            <span className="text-orange-600 font-bold text-xl"> {khachsan.KhoangGia} VND</span>
                            <span className="font-bold text-xl">Đánh giá {rating} <span className="fa fa-star checked text-yellow-400"></span></span>
                        </span>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div className="mr-5 text-gray-900">
                            </div>
                            <Link
                                to={`/hotel`}
                                className="mt-5 md:mt-0 bg-blue-600 rounded-sm text-center text-white hover:bg-blue-700 text-sm px-8 py-2 shadow
                    hover:shadow-lg"
                                type="button"
                            >
                                CHI TIẾT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            ))}
        </div>
    );
}

export default HotelItem;
