import React, { useContext } from 'react'
import { AuthContext } from './../Provider/AuthProvider';


export default function Contact() {

const {user} = useContext(AuthContext)



  return (
    <div className='text-center'>
        <h1>This is Contact Page</h1>
        <h4 className='text-[25px] '>Hello, Welcome <span className='text-red-600 font-[600]'>{}</span></h4>
    </div>
  )
}
