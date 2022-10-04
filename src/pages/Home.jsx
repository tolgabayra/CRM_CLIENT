import React from 'react'
import Recipe from '../components/dashboard/Recipe'

export default function Home() {
  return (
    <div>
      <h2 className='text-center text-5xl mb-6 mt-3'>Tarifleri Keşfet</h2>
      <div class="grid grid-cols-4 gap-3">
        <Recipe />
        <Recipe />

        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />

      </div>
    </div>
  )
}
