import React, { useContext } from 'react'
import { userContext } from '../../App'

export default function Contact() {
  const {setUser} = useContext(userContext)

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
