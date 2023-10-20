import React, { useState } from 'react'
import {Routes, Route } from "react-router-dom"
import Home from '../../Pages/HomePage/Home'
import About from '../../Pages/About/About'
import Blog from '../../Pages/blog/Blog'
import Login from '../Authentication/Login'
import Regestrition from '../Authentication/Regestrition'
import ErrorPage from '../../Pages/Error/ErrorPage'
import Contact from '../../Pages/Contact/Contact'
import SingleProduct from '../../Pages/HomePage/Product/SingleProduct'
import ProductItem from '../../Pages/HomePage/Product/Product'
import { PrivateRouter } from './PrivateRouter'

export default function Routing() {
const [state, setState] = useState(false)
  return (
    <>
        <Routes>
            <Route path='/*' element={<ErrorPage/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Product' element={
              <PrivateRouter state={state}>
                      <ProductItem></ProductItem>
              </PrivateRouter>
            } />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Registration' element={<Regestrition/>} />



            <Route path='/Product/:id' element={
              <PrivateRouter state={state}>
                  <SingleProduct/>
              </PrivateRouter>
            } />
        </Routes>
    </>
  )
}
