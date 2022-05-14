import React, {useState} from "react";
import { Link } from "react-router-dom";
import {FaSearch} from"react-icons/fa";


const Hero = () => {
    const [HangSao, setHangSao] = useState();
    const handleHangSao = (e) => setHangSao(e.target.value);

    const [IdDiaDiem, setIdDiaDiem] = useState();
    const handleIdDiaDiem = (e) => setIdDiaDiem(e.target.value);
    
    const SEARCH_INFO = {
        HangSao: HangSao,
        IdDiaDiem : IdDiaDiem
    }
    const handleRedirect = () => {
        localStorage.setItem("SEARCH_INFO", HangSao, IdDiaDiem);
    }
    return (
        <section className="relative">
            <img className="h-screen"/>
            <div className="mt-4 book flex flex-col justify-center  z-20 w-10/12">
                
            
                <div className="shadow-2xl bg-white-500  mt-5 p-6 rounded-sm mx-auto  w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-9/12 font-sans ">
                <div className="flex flex-col md:mr-3 w-full  p-1">
                            <span className="text-black-300  font-bold">
                                Thành phố, địa điểm hoặc tên khách sạn:
                            </span>
                            <select
                                aria-label='City'
                                className="px-6 py-3 mt-4" onChange={handleIdDiaDiem}>
                                <FaSearch/>
                                <option value="1">Đà Nẵng</option>
                                <option value="2">Đà Lạt</option>
                                <option value="3">Thành Phố Vũng Tàu</option>
                                <option value="4">Nha Trang</option>
                            </select>
                        </div>
                    <div className="flex flex-col xl:flex-row items-center">
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 p-1">
                            <label htmlFor='check-in' className="text-black-100  font-bold">
                                Nhận phòng:
                            </label>
                            <input
                                id= 'check-in'
                                className="px-6 py-3 mt-2 w-full"
                                type="date"/>
                        </div>
                        <div className="flex flex-col md:mr-3 w-full md:w-3/4 p-1">
                            <label htmlFor='check-out' className="text-black-100  font-bold">
                                Trả phòng:
                            </label>
                            <input
                                id='check-out'
                                className="px-6 py-3 mt-2 w-full"
                                type="date"/>
                        </div>
                        <div className="flex flex-col  w-full md:w-3/4 p-1">
                            <span className="text-black-100  font-bold">
                                Hạng sao:
                            </span>
                            <select
                                aria-label='SoDem'
                                className="px-6 py-3 mt-2" onChange={handleHangSao}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:mr-3 w-full  p-1">
                            <span className="text-black-100  font-bold">
                            Khách và Phòng
                            </span>
                            <select
                                aria-label='Guest Count'
                                placeholder="Select one"
                                className="px-6 py-3 mt-2"
                            >
                                <option value="1">1 Người lớn, 1 Trẻ em, 1 phòng</option>
                                <option value="2">2 Người lớn, 1 Trẻ em, 1 phòng</option>
                                <option value="3">3 Người lớn, 0 Trẻ em, 2 phòng</option>
                            </select>
                        </div>
                </div>

                <hr className="hidden xl:block my-5 w-4/12 mx-auto border-blue-800" />
                <Link className="font-sans text-center bg-orange-600 text-white hover:bg-orange-800  rounded-sm  px-12 py-4 shadow
                      hover:shadow-lg block mx-auto mt-2 xl:mt-0 "
                      to={`/search`} onClick={() => handleRedirect()}><div>Tìm khách sạn</div>
                    
                </Link>
            </div>
        </section>
    );
}
export default Hero;
