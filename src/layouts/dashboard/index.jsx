import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/dashboard/Navbar'
import Sidebar from '../../components/dashboard/Sidebar'

export default function Index() {
  return (
    <div class="relative overflow-hidden ">
  
  
    <Navbar />

    <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <Sidebar />
    </aside>
  
    <main class="ml-60 pt-6 max-h-screen overflow-auto">
      <div class="px-6 py-8">
        <div class="w-full mx-auto">
          <div class="bg-white rounded-3xl p-8 mb-5">
            
  
        
            <Outlet/>

          </div>
        </div>
      </div>
    </main>
  </div>
  )
}
