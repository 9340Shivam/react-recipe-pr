import React, { useState } from 'react'
import Navbar from './Componenets/Navbar'

const About = () => {
    const [x, setx] = useState(12);
    const handleAdd=()=>{
        setx(x+1)
    }
    const handleMin=()=>{
        setx(x-1)
    }
    const handleMul=()=>{
        setx(x*2)
    }
    const handleDev=()=>{
        setx(x/2)
    }
  return (
    <div >
      this is About
      <div className='d-flex flex-column bg-danger border border-5 rounded-pill rounded-5'>
      <h1>value:{x}</h1>
      <button className='bg-warning mx-2 rounded-5' onClick={handleAdd}>Add</button>
      <button className='bg-seccess mx-2 rounded-5' onClick={handleMin}>min</button>
      <button className='bg-info mx-2 rounded-5' onClick={handleMul}>multi</button>
      <button className='bg-danger mx-2 rounded-5' onClick={handleDev}>devision</button>
      </div>
    </div>
  )
}

export default About
