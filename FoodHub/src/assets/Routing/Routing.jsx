import React from 'react'
import {Routes, Route } from "react-router-dom"
import Home from '../../Pages/HomePage/Home'
import About from '../../Pages/About/About'
import Blog from '../../Pages/blog/Blog'
import Login from '../Authentication/Login'
import Regestrition from '../Authentication/Regestrition'
import ErrorPage from '../../Pages/Error/ErrorPage'
import Contact from '../../Pages/Contact/Contact'

export default function Routing() {
  return (
    <>
        <Routes>
            <Route path='/*' element={<ErrorPage/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Blog' element={<Blog/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Regestrition' element={<Regestrition/>} />
        </Routes>
    </>
  )
}
