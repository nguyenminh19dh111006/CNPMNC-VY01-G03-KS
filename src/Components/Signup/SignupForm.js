import React, {useState} from "react";
import { Navigate } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function SignupForm() {
    const [IdPartner, setIdPartner] = useState('');
    const [TenKhachSan, setTenKhachSan] = useState('');
    const [TenPhong, setTenPhong] = useState('');
    const [ThayDoiChinhSach, setThayDoiChinhSach] = useState();
    const [TenTaiKhoan, setTenTaiKhoan] = useState('');
    const [MatKhau, setMatKhau] = useState();
    const [redirectHome,setRedirectHome] = useState(false);
    const registerPartner = `http://157.245.207.242:8090/api/partner`;

if(redirectHome) {
    return <Link to={'/partner'} replace/>
}

    const changeIdPartner = e => setIdPartner(e.target.value);
    const changeTenKhachSan = e => setTenKhachSan(e.target.value);
    const changeTenPhong = e => setTenPhong(e.target.value);
    const changeThayDoiChinhSach = e => setThayDoiChinhSach(e.target.value);
    const changeTenTaiKhoan = e => setTenTaiKhoan(e.target.value);
    const changeMatKhau = e => setMatKhau(e.target.value);

    const handleRegister = (e) =>{

    Axios.post(registerPartner, {
        IdPartner:`${IdPartner}`,
        TenKhachSan: `${TenKhachSan}`,
        TenPhong: `${TenPhong}`,
        ThayDoiChinhSach: `${ThayDoiChinhSach}`,
        TenTaiKhoan: `${TenTaiKhoan}` ,
        MatKhau: `${MatKhau}` ,
      }).then((res) => {
        localStorage.setItem('USER_LOGIN_INFORMATION', JSON.stringify(res.data));
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
        <div className="bg-gray-100  flex flex-col justify-center items-center py-32">
            <h1 className="text-3xl font-semibold text-center">
                Tạo tài khoản mới
            </h1>

            <form
                action=""
                className="w-11/12 sm:w-10/12 lg:w-6/12 xl:w-4/12 bg-gray-200 p-10 rounded-sm  mt-10 border shadow-lg">
                <label htmlFor="IdPartner" className="block">
                    Id:{" "}
                </label>
                <input
                    onChange={changeIdPartner}
                    placeholder="Nhập Id"
                    type="text"
                    name="IdPartner"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="TenKhachSan" className="block mt-5">
                    Tên khách sạn:{" "}
                </label>
                <input
                    onChange={changeTenKhachSan}
                    placeholder="Nhập tên khách sạn"
                    type="text"
                    name="TenKhachSan"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="TenPhong" className="block mt-5">
                    Tên phòng:{" "}
                </label>
                <input

                    onChange={changeTenPhong}
                    placeholder="Nhập tên phòng"
                    type="text"
                    name="TenPhong"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="ThayDoiChinhSach" className="block mt-5">
                    Chính sách(nếu có):{" "}
                </label>
                <input
                    onChange={changeThayDoiChinhSach}
                    placeholder="Nhập chính sách"
                    type="text"
                    name="ThayDoiChinhSach"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="TenTaiKhoan" className="block mt-5">
                    Username:{" "}
                </label>
                <input
                    onChange={changeTenTaiKhoan}
                    placeholder="Nhập tên tài khoản"
                    type="text"
                    name="TenTaiKhoan"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="MatKhau" className="block mt-5">
                    Password:{" "}
                </label>
                <input
                    onChange={changeMatKhau}
                    placeholder="Nhập mật khẩu"
                    type="password"
                    name="MatKhau"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
                    <input
                        value="ĐĂNG KÝ"
                        name="submit"
                        className="text-center bg-blue-600 text-white hover:bg-blue-700 uppercase text-sm px-12 py-4 shadow
                    hover:shadow-lg"
                        type="submit"
                        onClick={handleRegister}/>
                       

                    <Link to="/login" className="text-blue-800 mt-5 md:mt-0 hover:text-blue-600">
                        Đã có tài khoản ?
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
