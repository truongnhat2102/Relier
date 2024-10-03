import React from 'react'
import OurPlatform from '../components/OurPlatform'
import RecentWork from '../components/RecentWork'
import Video from '../components/Video'
import ViewWork from '../components/ViewWork'

const Home = () => {
  return (
    <div>
      <Video />
      {/* <HeroBanner /> */}
      <OurPlatform />
      <ViewWork />
      <RecentWork />
    </div>
  )
}

export default Home
