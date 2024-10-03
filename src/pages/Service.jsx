import React from 'react'
import BannerWork from '../components/BannerWork'
import ServiceBanner from '../components/ServiceBanner'
const Service = () => {

    return (
        <div>
            <BannerWork text1={'Our Service'} text2={'"Bridging the gap between bright ideas and boundless opportunities, we connect startups with the resources they need to grow and thrive"'} />
            <ServiceBanner />
        </div>
    )
}

export default Service