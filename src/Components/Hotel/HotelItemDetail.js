import React, { useEffect, useState, Component } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';


function HotelItemDetail() {
    const [data, setkhachsan] = useState([])

    
    useEffect(()=>{
        Axios.get('http://157.245.207.242:8090/api/khachsan/1')
        .then(res => {
            console.log("Getting from ::::",res.data)
            setkhachsan(res.data)
        }).catch(err => console.log(err))
    },[])
    
    
    return  (
        <div>
            {data && (data.map(khachsan=>
        <div className="pl-5 pt-4 relative ">
            <div className="p-4 font-semibold shadow-lg rounded-t-lg bg-white">
                        <div
                            to={`/hotel`}
                            className="font-normal text-base flex flex-col md:justify-center">
                            
                            <span className="font-bold text-xl">{khachsan.TenKhachSan} Hotel</span>
                            <span className="text-gray-600 font-semibold text-sm">Secret Garden Resort</span>
                            <span className=" pt-1"><button className="text-white text-sm rounded-lg bg-blue-500 p-1 ">KHÁCH SẠN</button>
                            <span className="pl-2 fa fa-star checked text-yellow-400"></span>
                            <span className="fa fa-star checked text-yellow-400"></span>
                            <span className="fa fa-star checked text-yellow-400"></span>
                            <span className="fa fa-star checked text-yellow-400"></span>
                            <span className="fa fa-star checked text-yellow-400"></span>
                            </span>
                            <span className="text-gray-600 text-sm pt-2 fas fa-map-marker-alt"> Đường Trường Sa, Đà Nẵng, Việt Nam</span>
                        
                        </div>
            </div>
                
            <div className="bg-white shadow-lg flex md:flex-row md:justify-between md:items-center overflow-hidden ">
                <div className=" relative text-sm rounded-lg p-4">
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-full h-full object-cover rounded-lg"
                        alt="hotel"
                    />
                </div>
                
                <div className="pr-4 w-1/2 pt-4">
                    <div className="flex flex-col ">
                        
                    <img
                        src={"./assets/img/hotel1.png"}
                        className=" rounded-lg"
                        alt="hotel"/>
                    </div>

                    <div className="flex flex-col md:flex-row pt-2">
                  
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-full h-full object-cover rounded-lg"
                        alt="hotel"/>
    
                    </div>
                    <div className="flex flex-col md:flex-row pt-2">
                  
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-full h-full object-cover rounded-lg"
                        alt="hotel"/>
    
                    </div>
                    <div className="flex flex-col md:flex-row pt-2">
                  
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-full h-full object-cover rounded-lg"
                        alt="hotel"/>
    
                    </div>
                </div>
            </div>
            
            <div className="p-4 font-semibold shadow-lg bg-white flex flex-col md:flex-row md:justify-between">
                        <div
                            to={`/hotel`}
                            className="font-normal text-base flex flex-col md:justify-center"
                        >
                            <span className=" text-xl">Traveloka</span>
                            <span className="text-blue-600 font-semibold text-lg pt-4"><img src="./assets/img/travelokabird.png" className="float-left"/>8,5 Ấn tượng</span>
                            <span className=" pt-1 text-black text-sm font-normal pt-4">đánh giá từ du khách</span>
                            <span className=" pt-4 text-xl font-semibold">Tiện nghi khách sạn</span>
                        </div>
                        
                        
                        <div>
                        <span className="float-right">Giá phòng mỗi đêm từ</span>
                        <br/>
                        <span className="float-right text-orange-500 text-2xl">799.722 VND</span>
                        <br/>
                        <span className="float-right text-white text-lg w-full text-center rounded-lg bg-orange-500 py-2 px-24"><button>Đặt ngay</button></span>
                        </div>
                        
            </div>
                    <div className="pl-8 pl-4 font-semibold shadow-lg bg-white flex flex-col md:flex-row md:justify-between">
                        <div className="font-normal text-base">
                            <span className=" text-lg"><img src="./assets/img/aircondition.png" className="pl-4"/>Máy lạnh
                            </span>
                        </div>
                        <div className="font-normal text-base">
                            <span className=" text-lg"><img src="./assets/img/restau.png" className="pl-6"/>Nhà hàng
                            </span>
                        </div>
                        <div className="font-normal text-base">
                            <span className=" text-lg"><img src="./assets/img/swimpool.png" className="pl-4"/>Hồ bơi
                            </span>
                        </div>
                        <div className="font-normal text-base">
                            <span className=" text-lg pt-4"><img src="./assets/img/letan.png" className="pl-6"/>Lễ tân 24h
                            </span>
                        </div>
                        <div className="font-normal text-base">
                            <span className=" text-lg"><img src="./assets/img/chodauxe.png" className="pl-6"/>Chỗ đậu xe
                            </span>
                        </div>
                        <div className="font-normal text-base">
                            <span className=" text-lg"><img src="./assets/img/thangmay.png" className="pl-6"/>Thang máy
                            </span>
                        </div>
                        <div className="font-normal text-base">
                            <span className=" text-lg"><img src="./assets/img/wfi.png" className="pr-6"/>Wifi
                            </span>
                        </div>
                    </div>
                    <div className="p-4 text-center bg-white shadow-lg rounded-b-lg">
                    <span className=" text-blue-600 text-lg font-semibold pt-4  pl-18">XEM TẤT CẢ TIỆN NGHI</span>
                    </div>
        </div>
            ))}
            <div className="bg-gray-300 text-lg font-semibold ml-6 mt-6 rounded-lg mb-6  relative">
            <div className="pt-2 pl-4">Deluxe Double</div>
            <div className="pl-5 pt-4 pr-4 pb-4 relative">
            <div className="bg-white shadow-lg flex flex-col md:flex-row md:justify-between md:items-center w-full rounded-lg  overflow-hidden ">
                <div className="md:w-1/4 relative text-sm">
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-full h-40 object-cover rounded-lg"
                        alt="hotel"
                    />
                    <img
                        src={"./assets/img/hotel1.png"}
                        className="w-16 float-left mt-1 ml-6 mb-1"
                        alt="hotel"/>
                        <img
                        src={"./assets/img/hotel1.png"}
                        className="w-16 ml-2 mr-2 mt-1 float-left mb-1"
                        alt="hotel"/>
                        <img
                        src={"./assets/img/hotel1.png"}
                        className="w-16 mt-1 mb-1"
                        alt="hotel"/>
                </div>
                <div className=" md:w-3/4">
                <span className="pl-2">Phòng đôi Deluxe</span>
                <br/>
                <span className="pl-2 font-normal text-sm">1 Giường cỡ King</span>
                <span className="pl-2 font-normal text-sm pl-10">2 Khách</span>
                    <div className=" flex flex-col md:flex-row md:justify-between">
                        <Link
                            to={`/hotel`}
                            className="pt-6 text-sm text-green-400 pl-2"
                        >
                            <span>Miễn phí bữa sáng</span>
                            <br/>
                            <span>Wifi miễn phí</span>
                        </Link>
                        <span className="font-normal text-base flex flex-col md:justify-center md:items-end">
                            <span className="text-orange-600 font-bold text-xl mr-4">692.020  VND</span>
                            <span className="text-gray-400 font-semibold text-sm mr-4">/ phòng / đêm</span>
                        </span>
    
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                            <div className="mr-5 text-gray-900">
                            </div>
                            <Link
                                to={`/payment`}
                                className="mt-5 md:mt-0 bg-orange-600 rounded-lg text-center text-white hover:bg-orange-700 text-sm px-6 py-2 mr-4 shadow
                    hover:shadow-lg"
                                type="button"
                            >
                                Đặt ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            
        </div>
    )
}

export default HotelItemDetail;
