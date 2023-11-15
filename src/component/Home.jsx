import React from 'react'
import Hero from './hero/Hero'
import Trustedby from './trusted/Trustedby'
import SWrapper from './steps/SWrapper'
import ServicesMain from './services/Servicesmain'
import FWrapper from './features/FWrapper'
import Cta from './cta/Cta'
import RWrapper from './review/RWrapper'
import FaqW from './faq/FaqW'

const Home = () => {
  return (
    <>
    <Hero />
    <Trustedby />
    <SWrapper />
    <ServicesMain />
    <FWrapper />
    <Cta />
    <RWrapper />
    <FaqW />
    </>
  )
}

export default Home
