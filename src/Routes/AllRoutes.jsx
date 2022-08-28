import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Individuals from './Individuals'
import Teams from './Teams'
import Enterprise from './Enterprise'
import Products from './Products'
import Pricing from './Pricing'
import Resources from './Resources'
import LogIn from './LogIn'
import GetStarted from './GetStarted'
export default function AllRoutes() {
  return (
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/individuals' element={<Individuals/>}/>
         <Route path='/teams' element={<Teams/>}/>
         <Route path='/enterprise' element={<Enterprise/>}/>
         <Route path='/product' element={<Products/>}/>
         <Route path='/pricing' element={<Pricing/>}/>
         <Route path='/resources' element={<Resources/>}/>
         <Route path='/login' element={<LogIn/>}/>
         <Route path='/getStarted' element={<GetStarted/>}/>
     </Routes>
    
  )
}
