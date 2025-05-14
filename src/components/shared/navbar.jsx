import React from "react";

const Navbar = () => {
    return (
        <div className="navbar px-40 shadow-sm bg-amber-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Facilities</a></li>
                        <li><a>Admission</a></li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    <img src="https://i.postimg.cc/KjMK0xP1/Group.png" alt="" />
                    <a className=" text-xl text-black mt-4">SCHOOL</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Facilities</a></li>
                    <li><a>Admission</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-amber-600 rounded-full">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;