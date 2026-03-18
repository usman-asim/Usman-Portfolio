

import React from 'react'
// import Home from './pages/Home'
// import Services from './pages/Services'
// import Skills from './pages/Skills'
// import Contact from './pages/Contact'
// import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Projects from './components/Projects'
// import Projects from './components/Projects'

const App = () => {
  return (
    <div style={{backgroundColor:"black"}}  className='bg-black'>

 <Routes> 
  <Route path='/' element={<Home/>}/>
   <Route path='/About' element={<About/>}/>
  <Route path='/Services' element={<Services/>}/>
  <Route path='/Skills' element={<Skills/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Projects' element={<Projects/>}/>

</Routes>
 
    </div>
  )
}

export default App
