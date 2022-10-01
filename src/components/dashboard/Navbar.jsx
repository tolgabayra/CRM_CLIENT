import React from 'react'
import { FaTimesCircle } from "react-icons/fa"
import { Avatar, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { appAxios } from '../../utils/appAxios'




export default function Navbar() {

    const logout = () => {
      appAxios.post("/api/v1/auth/logout")
      .then(() => {
        
      })
      .catch(err=>{
        
      })
    }

    return (
        <div>
            <header className="fixed right-0 top-0 left-60 bg-blue-50 py-3 px-8 h-16">
                <nav className=" flex flex-col lg:flex-row lg:items-center flex-shrink-0">
                    <div className="flex justify-between items-center lg:mr-32">
                        <span className="text-dark text-xl"></span>
                        <button className="border border-dark px-2 py-1 rounded text-dark opacity-50 hover:opacity-75 lg:hidden" id="navbar-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="hidden lg:flex flex-grow" id="navbar-collapse">
                        <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">

                        </ul>
                        <div className="flex my-3 lg:my-0">
                            <Popover>
                                <PopoverTrigger>
                                    <Avatar name='' h={10} w={10} className='cursor-pointer' src='https://bit.ly/tioluwani-kolawole' />
                                </PopoverTrigger>
                                <Portal>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            <Link className='text-indigo-600 hover:text-indigo-500' to="/dashbaord/settings">Settings</Link>

                                        </PopoverBody>
                                        <PopoverFooter>
                                            <Link className='text-red-600 hover:text-red-500' to="/login">Logout</Link>
                                        </PopoverFooter>
                                    </PopoverContent>
                                </Portal>
                            </Popover>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
