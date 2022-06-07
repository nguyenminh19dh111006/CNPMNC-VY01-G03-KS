import React, {useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function LoginForm() { 
    const loginUrl = `http://157.245.207.242:8090/api/partner-login`;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const [redirect, setRedirect] = useState(false);
    if(redirect){
        window.location.href = "http://157.245.207.242:3000/partner";
      }
    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
  
    const handleLogin = (e) =>{
      Axios.post(loginUrl, {
        username: username,
        password: password
      }).then((res)=>{
        localStorage.setItem('LOGIN_INFORMATION', JSON.stringify(res.data));
        if(res.data.toString().length > 0) {
            setRedirect(true);
        }
      })
  
      e.preventDefault();
    }
    
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center py-32">
            <h1 className="text-3xl font-semibold text-center">
                Đăng nhập vào tài khoản
            </h1>

            <form
                className="w-11/12 sm:w-10/12 lg:w-6/12 xl:w-4/12 bg-gray-200 p-10 rounded-sm  mt-10 border shadow-lg">
                <label htmlFor="email" className="block">
                    Tên tài khoản:{" "}
                </label>
                <input
                    value={username}
                    onChange={onChangeUsername}
                    type="text"
                    name="user"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="password" className="block mt-5">
                    Password:{" "}
                </label>
                <input
                    value={password}
                    type="password"
                    name="pass"
                    onChange={onChangePassword}
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"
                />

                <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
                    <Link
                        href="http://157.245.207.242:3000/partner"
                        className="text-center bg-blue-600 text-white hover:bg-blue-700 uppercase text-sm px-12 py-4 shadow
                    hover:shadow-lg"
                        type="submit"
                        value="Đăng nhập"
                        name="submit"
                        onClick={handleLogin}>Đăng nhập

                    </Link>
                    
                    <Link
                        to="/signup"
                        className="text-blue-800 mt-5 md:mt-0 hover:text-blue-600">
                        Tạo tài khoản mới ?
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
