import React from 'react'
import HeroSection from './HeroSection'
import TopPostsSection from './TopPostsSection'
import TextSection from './TextSection'
import ReadySection from './ReadySection'

const Home = () => {
  return (
    <div style={{height:'fit-content',width:'100vw'}}>
      <HeroSection/>
      <TextSection/>
     <ReadySection />
      <TopPostsSection/>

    </div>
  )
}

export default Home