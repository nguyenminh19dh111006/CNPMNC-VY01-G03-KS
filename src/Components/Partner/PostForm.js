import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

function closeForm() {
    document.getElementById("newForm").style.display = "hidden";
}

function PostForm() {

    const [IdPhong, setIdPhong] = useState('');
    const [TenPhong, setTenPhong] = useState('');
    const [LoaiPhong, setLoaiPhong] = useState('');
    const [ThoiGianNhanPhong, setThoiGianNhanPhong] = useState();
    const [ThoiGianTraPhong, setThoiGianTraPhong] = useState('');
    const [SoDem, setSoDem] = useState();
    const [SoLuongNguoi, setSoLuongNguoi] = useState('');
    const [IdKhachSan, setIdKhachSan] = useState('');
    const [IdDiaDiem, setDiaDiem] = useState('');
    const [redirectHome,setRedirectHome] = useState(false);
    const insertpostPhong = `http://157.245.207.242:8090/api/phong`;

    if(redirectHome) {
        return <Link to={'/partner'} replace/>
    }

    const changeIdPhong = e => setIdPhong(e.target.value);
    const changeTenPhong = e => setTenPhong(e.target.value);
    const changeLoaiPhong = e => setLoaiPhong(e.target.value);
    const changeThoiGianNhanPhong = e => setThoiGianNhanPhong(e.target.value);
    const changeThoiGianTraPhong = e => setThoiGianTraPhong(e.target.value);
    const changeSoDem = e => setSoDem(e.target.value);
    const changeSoLuongNguoi = e => setSoLuongNguoi(e.target.value);
    const changeIdKhachSan = e => setIdKhachSan(e.target.value);
    const changeIdDiaDiem = e => setDiaDiem(e.target.value);

    const handlepostPhong = (e) =>{
        Axios.post(insertpostPhong, {
            IdPhong:`${IdPhong}`,
            TenPhong: `${TenPhong}`,
            LoaiPhong: `${LoaiPhong}`,
            ThoiGianNhanPhong: `${ThoiGianNhanPhong}`,
            ThoiGianTraPhong: `${ThoiGianTraPhong}`,
            SoDem: `${SoDem}` ,
            SoLuongNguoi: `${SoLuongNguoi}` ,
            IdKhachSan: `${IdKhachSan}` ,
            IdDiaDiem: `${IdDiaDiem}` ,
          }).then((res) => {
            localStorage.setItem('POST_INFORMATION', JSON.stringify(res.data));
            if(res.status == 201) {
                setRedirectHome(true)
            }
         })
         .catch((error) => {
         console.error(error)
        });
          e.preventDefault();
        }
      return (
        <div>
            <form className="bg-blue-300 rounded-lg p-4 shadow-lg" id="newForm">
                <div className="pb-4">
                    Id phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={IdPhong} onChange={changeIdPhong} name="IdPhong"/>
                </div>
                <div className="pb-4">
                    Tên phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={TenPhong} onChange={changeTenPhong} name="TenPhong"/>
                </div>
                <div className="pb-4">
                    Loại phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={LoaiPhong} onChange={changeLoaiPhong} name="LoaiPhong"/>
                </div>
                <div className="pb-4">
                    Thời gian nhận phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="date" value={ThoiGianNhanPhong} onChange={changeThoiGianNhanPhong} name="ThoiGianNhanPhong"/>
                </div>
                <div className="pb-4">
                    Thời gian trả phòng:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="date" value={ThoiGianTraPhong} onChange={changeThoiGianTraPhong} name="ThoiGianTraPhong"/>
                </div>
                <div className="pb-4">
                    Số đêm:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={SoDem} onChange={changeSoDem} name="SoDem"/>
                </div>
                <div className="pb-4">
                    Số lượng người:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={SoLuongNguoi} onChange={changeSoLuongNguoi} name="SoLuongNguoi"/>
                </div>
                <div className="pb-4">
                    Id Khách Sạn:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={IdKhachSan} onChange={changeIdKhachSan} name="IdKhachSan"/>
                </div>
                <div className="pb-4">
                    Id Địa điểm:
                    <input className="ml-4 text-sm pl-1 rounded-lg" type="text" value={IdDiaDiem} onChange={changeIdDiaDiem} name="IdDiaDiem"/>
                </div>
                <button className="outline-none focus:outline-none bg-green-200 p-2 text-blue-700 font-bold rounded-lg shadow-lg" type="submit" onClick={handlepostPhong}>SUBMIT</button>
                <button className="float-right outline-none focus:outline-none bg-green-200 p-2 rounded-lg shadow-lg" onClick={closeForm}>CLOSE</button>
            </form>
        </div>
      );
    }
export default PostForm