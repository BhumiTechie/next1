"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState(30);
  return (
     <div className='text-center'>
       <h1>{title}</h1>
       <button className='px-7 bg-amber-700' onClick={() => settitle(title + 1)}>
        Change
       </button>
       </div>
  )
}

export default page