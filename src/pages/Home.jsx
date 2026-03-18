import React from 'react'
import Landing from '../components/Landing'
// import Projects from '../components/Projects'
import Number from '../components/Number'
// import Foooter from '../components/Foooter'
// import About from './About'
import Services from './Services'
import Projects from '@/components/Projects'
import Skills from './Skills'
import Contact from './Contact'
import Foooter from '@/components/Foooter'
// import Contact from './Contact'
// import Foooter from '@/components/ui/Foooter'
// Contact
// Skills
const Home = () => {
  return (
    <div className="  overflow-x-hidden">
    
   <Landing/>
   <Number></Number>
   <Services></Services>
   <Projects/>
   <Skills></Skills>
   <Contact></Contact>
   <Foooter></Foooter>
    </div>
  )
}

export default Home
