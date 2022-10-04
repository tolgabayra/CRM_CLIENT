import React from 'react'

export default function Recipe() {
    return (
        <div>


            <div class="mx-auto hover:shadow-xl shadow-sm duration-500">
                <div class="bg-white  rounded-lg mb-6 tracking-wide" >
                    <div class="md:flex-shrink-0">
                        <img src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg" alt="mountains" class="w-full h-42 rounded-lg rounded-b-none" />
                    </div>
                    <div class="px-4 py-1 mt-2">
                        <h2 class="font-bold text-lg text-gray-800 tracking-normal">My Amaizing Journey to the Mountains.</h2>
                        <p class="text-sm text-gray-700  mr-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporaplaceat quia, mi modi soluta similique...
                        </p>
                        <div class="flex items-center justify-between mt-2 mx-6">
                            <a href="#" class="text-blue-500 text-xs -ml-3 ">Show More</a>
                            <a href="#" class="flex text-gray-700">
                                <svg fill="none" viewBox="0 0 24 24" class="w-6 h-6 text-blue-500" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                5
                            </a>
                        </div>
                        <div class="author flex items-center -ml-3 my-3">
                            <div class="user-logo">
                                <img class="w-8 h-8 object-cover rounded-full mx-4  shadow" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" />
                            </div>
                            <h2 class="text-sm tracking-tighter text-gray-900">
                                <a href="#">By Mohammed Ibrahim</a> <span class="text-gray-600">21 SEP 2015.</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}