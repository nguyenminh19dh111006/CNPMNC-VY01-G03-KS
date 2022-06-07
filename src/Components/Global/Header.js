import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const [dropDown, setDropDown] = useState(false);
    const [dropDown1, setDropDown1] = useState(false);
    const state = useSelector((state) => state);
    const state1 = useSelector((state) => state);
    return (
        <header className="relative shadow-lg">
            <nav
                className={window.location.pathname === "/" || window.location.pathname === `/hotel`
                        ? "bg-gray-900 flex justify-between items-center p-5 xl:px-24 text-gray-100 absolute top-0 w-full "
                        : "bg-gray-900 flex justify-between items-center p-5 xl:px-24 text-gray-100 w-full " 
                }
                style={{ boxShadow: "inset 0px -90px 20px rgba(255, 255, 255)" }}>
                <Link to="/" className="z-50 resize-both">
                    <img
                        src="/assets/img/logo.png"
                        className="w-39 h-8 inline-block "
                        alt="logo"/>
                </Link>

                <ul id="flex-menu" className="z-40 md:flex items-center text-lg font-sans">
                    
                        <>
                            <div onClick={() => setDropDown(!dropDown)} onMouseLeave={() => setDropDown(false)}
                                className="absolute right-0 md:mt-24 mr-10 xl:mr-24 w-48 rounded-sm  shadow-lg py-1 bg-gray-100 text-sm"
                                style={!dropDown ? { display: "none" }: { display: "block" }}>
                                <Link to="/login"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 ">
                                    Đăng nhập
                                </Link>
                                <Link to="/signup"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 ">
                                    Đăng ký
                                </Link>
                            </div>
                        </>
                        <>
                            <li aria-label="dropdown button" className="mr-5 text-orange-500 hover:text-orange-800 cur" onClick={() => {setDropDown1(!dropDown1);}}>
                                <span className="pb-2 pl-24">
                                    <i className={`fas fa-caret-down fa-lg fa-2x cursor-pointer`}></i>
                                </span>
                                <br />
                            </li>
                        </>
                        <>
                            <div onClick={() => setDropDown1(!dropDown1)} onMouseLeave={() => setDropDown1(false)}
                                className="absolute right-0 md:mt-24 mr-10 xl:mr-24 w-48 rounded-sm  shadow-lg py-1 bg-gray-100 text-sm"
                                style={!dropDown1 ? { display: "none" }: { display: "block" }}>
                                <a 
                                    href="https://vy1-go1-profile-app-s3cic.ondigitalocean.app"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 ">
                                    Đăng nhập
                                </a>
                            </div>
                        </>
                        <>
                            <li aria-label="dropdown button" className="mr-5 text-blue-500 hover:text-blue-800 cur" onClick={() => {setDropDown(!dropDown);}}>
                                <span className="pb-2 pl-24">
                                    <i className={`fas fa-caret-down fa-lg fa-2x cursor-pointer`}></i>
                                </span>
                                <br />
                            </li>
                        </>
                    
                </ul>
            </nav>
        </header>
    );
}
export default Header;
