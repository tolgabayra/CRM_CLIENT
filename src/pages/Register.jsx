import React from 'react'
import { InputGroup,Input, Button, InputRightElement} from "@chakra-ui/react"
export default function Register() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
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
              With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
              UI design on us!
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Don't have an account?</span>
              <a href="#" className="underline">Get Started!</a>
            </p>
            <p className="mt-6 text-sm text-center text-gray-300">
              Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
            <form action="#" className="flex flex-col space-y-5">
            <div class="mb-1 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
										First Name
									</label>
                  <Input placeholder='Basic usage' />

								</div>
								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
										Last Name
									</label>
                                    <Input placeholder='Basic usage' />

								
								</div>
							</div>
                <div className="flex flex-col space-y-1">
                <label for="email" className="text-sm font-semibold text-gray-500">Email address</label>
                <Input placeholder='Basic usage' />
              </div>
              
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                  <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                </div>
                <InputGroup size='md'>
                  <Input
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
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
          
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
