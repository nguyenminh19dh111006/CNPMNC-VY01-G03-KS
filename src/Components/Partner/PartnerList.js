import React, { useEffect, useState, Component, useRef } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


  
function PartnerList(){

    const [IdPhong, setidphong] = useState("");
    const [TenPhong, settenphong] = useState("");
    const [LoaiPhong, setloaiphong] = useState("");
    const [ThoiGianNhanPhong, setthoigiannhanphong] = useState("");
    const [ThoiGianTraPhong, setthoigiantraphong] = useState("");
    const [SoDem, setsodem] = useState("");
    const [SoLuongNguoi, setsoluongnguoi] = useState("");
    

    const changeHandler = e =>{
        setidphong(e.target.IdPhong);
        settenphong(e.target.TenPhong);
        setloaiphong(e.target.LoaiPhong);
        setthoigiannhanphong(e.target.ThoiGianNhanPhong);
        setthoigiantraphong(e.target.ThoiGianTraPhong);
        setsodem(e.target.SoDem);
        setsoluongnguoi(e.target.SoLuongNguoi);
    }

    const submitHandler = e =>{
        e.preventDefault()
        Axios.post('http://157.245.207.242:8090/api/phong').then(response => {
            console.log(response)
        }).catch(error =>{
            console.log(error)
        })
    }

    const [data, setDate] = useState([])

    useEffect(()=>{
        Axios.get('http://157.245.207.242:8090/api/phong')
        .then(res => {
            console.log("Getting from ::::",res.data)
            setDate(res.data)
        }).catch(err => console.log(err))
    },[])

    
    
    return  (
        <div className="pl-20">
            <div className="ml-40">
            <div className="pb-2">
             
            </div>
            <form className="hidden fixed bg-blue-200 mt-16 ml-56 p-4 shadow-lg" onSubmit={submitHandler} id="myForm">
            <div className="pb-4">
                Id Phòng:
                <input type="text" name="IdPhong" value={IdPhong} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="pb-4">
                Tên phòng:
                <input type="text" name="TenPhong" value={TenPhong} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="pb-4">
                Loại phòng:
                <input type="text" name="LoaiPhong" value={LoaiPhong} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="pb-4 pr-2">
                Thời gian nhận phòng:
                <input type="date" name="ThoiGianNhanPhong" value={ThoiGianNhanPhong} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="pb-4">
                Thời gian trả phòng:
                 <input type="date" name="ThoiGianTraPhong" value={ThoiGianTraPhong} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="pb-4">
                Số đêm:
                <input type="text" name="SoDem" value={SoDem} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="pb-4">
                Số lượng người:
                <input type="text" name="SoLuongNguoi" value={SoLuongNguoi} onChange={changeHandler} className="ml-4 text-sm pl-1"></input>
            </div>
            <div className="p-4">
            <button className="bg-green-200 outline-none focus:outline-none p-2 rounded-lg shadow-lg" type="submit">UPDATE</button>
            <button className="float-right outline-none focus:outline-none bg-green-200 p-2 rounded-lg shadow-lg" onClick={closeForm}>CLOSE</button>
            </div>
        </form>
        
    <table className="">
    <thead className="border-solid border-2 border-black">
    <tr>
      <th>Id Phòng</th>
      <th>Tên phòng</th>
      <th>Loại phòng</th>
      <th>Thời gian trả phòng</th>
      <th>Thời gian nhận phòng</th>
      <th>Số đêm</th>
      <th>Số lượng khách hàng</th>
    </tr>
    </thead>
    {data && (data.map(Data=><tbody className="border-solid border-2 h-20 border-black text-center">
    <tr>
      <td>{Data.IdPhong}</td>
      <td>{Data.TenPhong}</td>
      <td>{Data.LoaiPhong}</td>
      <td>{Data.ThoiGianNhanPhong}</td>
      <td>{Data.ThoiGianTraPhong}</td>
      <td>{Data.SoDem}</td>
      <td>{Data.SoLuongNguoi}</td>
      <td><button className="bg-blue-300 outline-none focus:outline-none m-5 text-xs font-semibold p-2 rounded-lg" onClick={openForm}>Chỉnh sửa</button></td>
      <td><button className="bg-blue-300 outline-none focus:outline-none m-5 text-xs font-semibold p-2 rounded-lg">Xóa</button></td>
    </tr>
    </tbody>))}
    </table>
            </div>
    </div>
    );
}

export default PartnerList;
