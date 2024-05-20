import React from 'react'
import "./Home.css"
import HeroSection from '../../../components/HeroSection/HeroSection'
import StorySection from '../../../components/StorySection/StorySection'
import DiscoverSection from '../../../components/DiscoverSection/DiscoverSection'
import CardsSection from '../../../components/CardsSection/CardsSection'
import ReviewSection from '../../../components/ReviewSection/ReviewSection'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <StorySection/>
      <DiscoverSection/>
      <CardsSection/>
      <ReviewSection/>
    </>
  )
}

export default Home
