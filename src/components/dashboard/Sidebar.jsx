import React from 'react'
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa"
import { FaClipboard } from "react-icons/fa"
import { FaCog } from "react-icons/fa"

export default function Sidebar() {
    return (
        <div>
            <div
                className=""
            >
                <button
                    className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
                >
                    <svg
                        className="w-5 h-5 fill-current"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                </button>
                <div
                    id="sidebar"
                    className="bg-white h-screen md:block shadow-sm px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                >
                    <div className="space-y-6 md:space-y-10 mt-10">
                        <h1 className="font-bold text-4xl text-center md:hidden">
                            D<span className="text-teal-600">.</span>
                        </h1>
                        <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                            Bayrak Panel<span className="text-teal-600">.</span>
                        </h1>
                        <div id="profile" className="space-y-3">
                            <img
                                src="https://pbs.twimg.com/profile_images/1467997254929854470/mDYbXoVl_400x400.jpg"
                                alt="Avatar user"
                                className="w-10 md:w-16 rounded-full mx-auto"
                            />
                            <div>
                                <h2
                                    className="font-medium text-xs md:text-sm text-center text-teal-500"
                                >
                                    Tolga BAYRAK
                                </h2>
                                <p className="text-xs text-gray-500 text-center">Administrator</p>
                            </div>
                        </div>
                       
                        <div id="menu" className="flex flex-col space-y-2">
                            <Link
                                to="/dashboard/home"
                                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                            >
                                <FaClipboard
                                    className="w-6 h-6 mr-2 fill-current inline-block"
                                  
                                >
                                   
                                </FaClipboard>
                                <span className="">Dashboard</span>
                            </Link>
                            <Link
                                to="/dashboard/products"
                                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                                <FaShoppingBasket
                                    className="w-6 h-6 mr-2 fill-current inline-block"
                                 
                                >
                                  
                                </FaShoppingBasket>
                                <span className="">Products</span>
                            </Link>
                            <Link
                                to="/dashboard/users"
                                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                                <FaUsers
                                    className="w-6 h-6 mr-2 fill-current inline-block"
                                
                                >
                              
                                </FaUsers>
                                <span className="">Users</span>
                            </Link>

                            <Link
                                to="/dashboard/settings"
                                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                            >
                                <FaCog
                                    className="w-6 h-6 mr-2 fill-current inline-block"
                                
                                 />
                                    
                                <span className="">Settings</span>
                            </Link>
                       
                        
                         
                           
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}
