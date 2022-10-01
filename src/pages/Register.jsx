import React, { useState } from 'react'
import { InputGroup, Input, Button, InputRightElement, useToast } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom'
import { appAxios } from '../utils/appAxios'


export default function Register() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const navigate = useNavigate()
  const toast = useToast()


  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const submitRegister = () => {
    appAxios.post("/api/v1/auth/register",{
      username,
      email,
      password
    },{withCredentials: true})
    .then(() => {
      toast({
        title: 'Your account has been created.',
        description: "You are redirected to the login page",
        status: 'success',
        position: "top-right",
        duration: 2000,
        isClosable: true,
      })
      setTimeout(() => {
        navigate("/login")
      }, 2000);
    })
    .catch(err=>{
      toast({
        title: 'We couldnt create your account',
        description: "Check your informations",
        status: 'error',
        position: "top-right",
        duration: 2000,
        isClosable: true,
      })
    })
  }




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
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 

            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Already have an account?</span>
              <Link to="/login" className="underline">Sign In</Link>
            </p>
           
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Create your account</h3>
            <div className="flex flex-col space-y-5">
              <div className="mb-1 md:flex md:justify-between">
               
              </div>
              <div className="flex flex-col space-y-1">
                <label for="username" className="text-sm font-semibold text-gray-500">Username</label>
                <Input onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
              </div>
              <div className="flex flex-col space-y-1">
                <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                <Input onChange={(e)=>setEmail(e.target.value)} placeholder='example@example.com' />
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                </div>
                <InputGroup size='md'>
                  <Input
                  onChange={(e)=>setPassword(e.target.value)}
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <label for="remember" className="text-sm font-semibold text-gray-500">Remember me</label>
              </div>
              <div>
                <button
                  onClick={submitRegister}
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Register
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
