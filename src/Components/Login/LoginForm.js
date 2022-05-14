import React, {} from "react";
import { Link } from "react-router-dom";

function LoginForm() { 
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center py-32">
            <h1 className="text-3xl font-semibold text-center">
                Đăng nhập vào tài khoản
            </h1>

            <form
                className="w-11/12 sm:w-10/12 lg:w-6/12 xl:w-4/12 bg-gray-200 p-10 rounded-sm  mt-10 border shadow-lg">
                <label htmlFor="email" className="block">
                    Email:{" "}
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"/>

                <label htmlFor="password" className="block mt-5">
                    Password:{" "}
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    className="p-2 w-full border border-gray-400 focus:outline-none focus:border-black"
                    aria-required="true"
                />

                <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
                    <button
                        className="text-center bg-blue-600 text-white hover:bg-blue-700 uppercase text-sm px-12 py-4 shadow
                    hover:shadow-lg"
                        type="submit">
                        Đăng nhập
                    </button>
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
