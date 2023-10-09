import React, { useContext } from 'react'


export default function Contact() {

  return (
    <div className='text-center'>
        <h1>This is Contact Page</h1>
        <button onClick={()=>{
          setUser({
            Name:"Rana",
            age:"23"
          })
        }}>Change state</button>
    </div>
  )
}
