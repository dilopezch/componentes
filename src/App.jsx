import { useState } from 'react'
import React from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article className="h-screen flex items-center justify-center bg-orange-200">
        <img className='size-24 object-cover rounded-full m-1' src="./src/assets/img/gato.jpg" alt="profile_picture" />
        <div>
          <h1 className='text-3xl font-bold underline'>Gato</h1>
          <span>Jefe de la casa</span>
        </div>

      </article>
    </>
  )
}

export default App
