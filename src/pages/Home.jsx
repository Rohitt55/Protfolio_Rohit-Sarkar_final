import React from 'react'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Projects from './Projects'

function Home() {
  return (
    <>
    <Hero/>
    <Partners/>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default Home