import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {FaSearch} from"react-icons/fa";
import Checkbox from "../Global/Checkbox";
import Axios from "axios";


function PaymentDetail() {

    const [data, setDate] = useState([])
    const [dato, setDato] = useState([])

    
    useEffect(()=>{
        Axios.get('http://157.245.207.242:8090/api/phong/1')
        .then(res => {
            console.log("Getting from ::::",res.data)
            setDate(res.data)
        }).catch(err => console.log(err))
    },[])

    useEffect(()=>{
        Axios.get('http://157.245.207.242:8090/api/khachsan/1')
        .then(res => {
            console.log("Getting from ::::",res.data)
            setDato(res.data)
        }).catch(err => console.log(err))
    },[])
    return (
        <div className="p-20 text-2xl">
            <span className="font-bold">Đặt phòng khách sạn</span>
            <div className="w-1/3 bg-white float-right rounded-lg p-4 shadow-lg">
            {dato && (dato.map(dato=><div>
                <span className="font-bold text-lg">Khách sạn {dato.TenKhachSan}:</span>
                <br/>
                <span className="text-sm">{dato.TenKhachSan} Hotel</span>
                <br/>
                </div>))}
                {data && (data.map(Data=><div>
                <span className="text-sm text-gray-500">Ngày nhận phòng: {Data.ThoiGianNhanPhong}</span>
                <br/>
                <span className="text-sm text-gray-500">Ngày trả phòng: {Data.ThoiGianTraPhong}</span>
                <br/>
                <span className="font-semibold text-lg">Phòng Đôi Deluxe</span>
                <br/>
                <span className="text-sm text-gray-500">khách/phòng {Data.SoLuongNguoi}</span>
                <br/>
                </div>))}
                <span className="text-sm text-gray-500">Kiểu giường</span>
                <br/>
                <span className="text-sm text-green-500 font-semibold">Miễn phí bữa sáng</span>
                <br/>
                <span className="text-sm text-green-500 font-semibold">WiFi miễn phí</span>
                <hr/>
                <span className="text-sm text-gray-500">Không hoàn tiền</span>
                <br/>
                <span className="text-sm text-gray-500">Không áp dụng đổi lịch</span>
            </div>
            <br/>
            <span className="text-lg">Điền thông tin người liên lạc và khách bên dưới</span>
            <br/>
            <span className="text-lg">Thông tin của bạn</span>        
            
            <div className="w-1/2 bg-white rounded-lg p-4 shadow-lg">
                <span className="text-sm font-bold">Tên người liên hệ:</span>
                <br/>
                <form action="" className="">
                    <input type="text" id="inputten" className="bg-gray-100 rounded-lg w-full text-sm p-2"/>
                </form>
                <span className="text-sm text-gray-500">*Nhập tên như trên CMND/Hộ chiếu (không dấu)</span>
                <br/>
                <select className="text-sm font-semibold">
                        <option value="all">Vietnam (+84)</option>
                        <option value="all">United States(+1)</option>
                        <option value="all">Uruquay(+598)</option>
                        <option value="all">Singapore(+65)</option>
                </select>
                <form action="" className="inline">
                    <input type="text" id="inputten" className="bg-gray-100 rounded-lg w-32 ml-2 mr-5 text-sm p-2"/>
                    <span className="text-sm font-bold pr-4">Số di động:</span>
                    <input type="text" id="inputten" className="bg-gray-100 rounded-lg text-sm p-2"/>
                </form>
            <div className="pt-4">
            <div className="text-sm p-4 font-bold pl-10 bg-gray-300 rounded-lg pt-2 ">
                <Checkbox   id="homestaybb"
                            name="bb"
                            title="Tôi là khách lưu trú"/>
                <Checkbox   id="homestaybb"
                            name="bb"
                            title="Tôi đang đặt cho người khác"/>
            </div>
            </div>
            </div>

            <span className="text-lg">Yêu cầu đặc biệt</span>        
            
            <div className="w-1/2 bg-white rounded-lg p-4 shadow-lg">
                
            <div className="">
            <form className="text-sm pt-4 font-bold pl-10 rounded-lg ">
                <input type="checkbox" class="h-4 w-4"/>
                <span class="ml-2 text-lg font-normal">Phòng không hút thuốc</span>
                <input type="checkbox" class="h-4 w-4 ml-4"/>
                <span class="ml-2 text-lg font-normal">Phòng liên thông</span>
            </form>
            <form className="text-sm pt-4 font-bold pl-10 rounded-lg ">
                <input type="checkbox" class="h-4 w-4"/>
                <span class="ml-2 text-lg font-normal">Tầng lầu</span>
                <input type="checkbox" class="h-4 w-4 ml-24"/>
                <span class="ml-2 text-lg font-normal">Loại giường</span>
            </form>
            <form className="text-sm pt-4 font-bold pl-10 rounded-lg ">
                <input type="checkbox" class="h-4 w-4"/>
                <span class="ml-2 text-lg font-normal">Giờ nhận phòng</span>
                <input type="checkbox" class="h-4 w-4 ml-10"/>
                <span class="ml-2 text-lg font-normal">Giờ trả phòng</span>
            </form>
            <form className="text-sm pt-4 font-bold pl-10 rounded-lg ">
                <input type="checkbox" class="h-4 w-4"/>
                <span class="ml-2 text-lg font-normal">Khác</span>
            </form>
            </div>
            </div>

            <span className="text-lg">Chính sách hủy đặt phòng</span>
            <div className="w-1/2 bg-white rounded-lg p-4 shadow-lg">
            <span className="text-sm font-bold">Đặt phòng này không được hoàn tiền</span>
            </div>

            <span className="text-lg">Chi tiết giá</span>
            <div className="w-1/2 bg-white rounded-lg p-4 shadow-lg">
            <span className="text-lg font-semibold">Thành tiền</span>
            <span className="text-lg font-semibold float-right pt-2">VND</span>
            </div>

            <div className="pt-2 text-center mr-24">
            <span className="text-lg p-2 bg-orange-400 font-semibold text-white rounded-lg"><Link to="/paymentfinish">Thanh toán</Link></span>
            </div>
        </div>
    );
}
export default PaymentDetail;
