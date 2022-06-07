import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Global/Checkbox";
import Axios from "axios";


function PaymentFinishing() {

    const [data, setDate] = useState([])
    const [dato, setDato] = useState([])
    const [IdKhachHang, setIdKhachHang] = useState('');
    const [IdDiaDiem, setIdDiaDiem] = useState('');
    const [IdKhachSan, setIdKhachSan] = useState('');
    const [SoDiDong, setSoDiDong] = useState();
    const [TenNguoiLienHe, setTenNguoiLienHe] = useState('');
    const [CVV, setCVV] = useState();
    const [HieuLuc, setHieuLuc] = useState('');
    const [SoThe, setSoThe] = useState('');
    const [redirectHome,setRedirectHome] = useState(false);
    const insertDatPhong = `http://157.245.207.242:8090/api/datphong`;

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


    if(redirectHome) {
        return <Link to={'/partner'} replace/>
    }

    const changeIdKhachHang = e => setIdKhachHang(e.target.value);
    const changeIdDiaDiem = e => setIdDiaDiem(e.target.value);
    const changeIdKhachSan = e => setIdKhachSan(e.target.value);
    const changeSoDiDong = e => setSoDiDong(e.target.value);
    const changeTenNguoiLienHe = e => setTenNguoiLienHe(e.target.value);
    const changeCVV = e => setCVV(e.target.value);
    const changeHieuLuc = e => setHieuLuc(e.target.value);
    const changeSoThe = e => setSoThe(e.target.value);

    
    const handleDatPhong = (e) =>{
    Axios.post(insertDatPhong, {
        IdKhachHang:`${IdKhachHang}`,
        IdDiaDiem: `${IdDiaDiem}`,
        IdKhachSan: `${IdKhachSan}`,
        SoDiDong: `${SoDiDong}`,
        TenNguoiLienHe: `${SoDiDong}`,
        CVV: `${CVV}` ,
        HieuLuc: `${HieuLuc}` ,
        SoThe: `${SoThe}` ,
      }).then((res) => {
        localStorage.setItem('PAYMENT_INFORMATION', JSON.stringify(res.data));
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
        <div className="p-20 text-2xl">
            <span className="ml-10 text-gray-600">Thanh toán</span>
            <div className="w-1/3 bg-white mr-32 mt-10 float-right rounded-lg p-4 shadow-lg">
            <div>
                <span className="text-gray-600 text-sm">MÃ ĐẶT CHỖ</span>
                <br/>
                <span className="text-lg">92183912</span>
                <hr/>
                </div>
                <div>
                <span className="text-sm text-gray-500">KIỂM TRA THÔNG TIN ĐẶT PHÒNG: </span>
                <br/>
                <span className="font-bold text-sm">Muong Thanh Grand Da Nang Hotel </span>
                <br/>
                <span className="text-sm text-gray-500">ngày 8/6/2022</span>
                <br/>
                <span className="text-sm text-gray-500">Thời hạn<input type="text" id="inputten" onChange={changeIdKhachHang} className="bg-gray-100 rounded-lg w-10 ml-2 mr-5 text-sm p-2"/> </span>
                <br/>
                <span className="text-sm text-gray-500">Presidential Suite<input type="text" id="inputten" onChange={changeIdKhachSan} className="bg-gray-100 rounded-lg w-10 ml-2 mr-5 text-sm p-2"/> </span>
                <br/>
                <span className="text-sm text-gray-500">Số lượng phòng<input type="text" id="inputten" onChange={changeIdDiaDiem} className="bg-gray-100 rounded-lg w-10 ml-2 mr-5 text-sm p-2"/> </span>
                <br/>
                </div>
                <hr/>
                <span className="text-sm text-gray-500">KHÁCH</span>
                <br/>
                <span className="text-sm font-semibold">Tên khách</span>
                <br/>
            </div>
                   
            
            <div className="w-1/2 ml-10 mt-1 bg-white rounded-lg p-4 shadow-lg">
                <span className="text-sm font-bold">Số thẻ:</span>
                <br/>
                <form action="" className="">
                    <input type="text" onChange={changeSoThe} placeholder='16 chữ số mặt trên mặt thẻ' id="inputten" className="bg-gray-100 rounded-lg w-full text-sm p-2"/>
                </form>
                <span className="text-sm font-bold">Hiệu lực đến:</span>
                <br/>
                <form action="" className="inline">
                    <input type="date" onChange={changeHieuLuc} id="inputten" className="bg-gray-100 rounded-lg w-32 mr-5 text-sm p-2"/>
                    <span className="text-sm font-bold pr-4">CVV:</span>
                    <input type="text" onChange={changeCVV} id="inputten" className="bg-gray-100 rounded-lg text-sm p-2"/>
                </form>
                <br/>
                <span className="text-sm font-bold">Tên người liên hệ:</span>
                <br/>
                <form action="" className="">
                    <input type="text" onChange={changeTenNguoiLienHe} id="inputten" className="bg-gray-100 rounded-lg w-full text-sm p-2"/>
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
                    <input type="text" onChange={changeSoDiDong} id="inputten" className="bg-gray-100 rounded-lg w-32 ml-2 mr-5 text-sm p-2"/>
                    
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
            <span className="text-lg font-bold">Chi tiết giá</span>
            <div className="w-1/2 bg-white rounded-lg p-4 shadow-lg">
            <span className="text-lg font-semibold">Thành tiền</span>
            {dato && (dato.map(khachsan=><span className="text-lg font-semibold float-right pt-2">{khachsan.KhoangGia} VND</span>))}
            </div>
            </div>
            <div className="pt-2 text-center mr-24">
            <span><input className="text-lg p-2 bg-orange-400 font-semibold text-white rounded-lg" value="Thanh toán qua thẻ" type="submit" name="submit" onClick={handleDatPhong}></input></span>
            </div>
            
        </div>
    );
}
export default PaymentFinishing;
