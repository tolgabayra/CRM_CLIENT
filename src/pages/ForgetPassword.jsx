import React from 'react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


export default function ForgetPassword() {
    return (
        <div>
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="#">Bayrak Panel</a>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            Forgot password ? Don't worry, you can reset your password from this screen. We will send a link to your registered email address.
                        </p>


                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h3 className="my-4 text-2xl font-semibold text-gray-700">Reset Your Password</h3>
                        <form action="#" className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-1">
                                <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                                <Input placeholder='Your Email Adress' />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex justify-end">
                                    <Link to="/login"
                                        className="text-sm text-blue-600 hover:underline focus:text-blue-800">Login page</Link>
                                </div>

                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Reset Password
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
