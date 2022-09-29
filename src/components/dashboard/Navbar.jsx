import React from 'react'
import { FaTimesCircle } from "react-icons/fa"
import { Button } from "@chakra-ui/react"
export default function Navbar() {
    return (
        <div>
            <header class="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
                <nav class=" flex flex-col lg:flex-row lg:items-center flex-shrink-0">
                    <div class="flex justify-between items-center lg:mr-32">
                        <span class="text-dark text-xl"></span>
                        <button class="border border-dark px-2 py-1 rounded text-dark opacity-50 hover:opacity-75 lg:hidden" id="navbar-toggle">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>
                    <div class="hidden lg:flex flex-grow" id="navbar-collapse">
                        <ul class="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">

                        </ul>
                        <div class="flex my-3 lg:my-0">

                            <Button rightIcon={<FaTimesCircle />} colorScheme="red" variant="outline">
                                Çıkış Yap
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
