import React from 'react'
import BannerWork from '../components/BannerWork'
import FormContact from '../components/FormContact'

const Contact = () => {
  return (
    <div>
      <BannerWork text1={'Contact Us'} text2={'"Connect with us today to explore how we can help turn your vision into reality, from ideas to action."'} />
      <div className='mt-5'>
        <FormContact />
      </div>

    </div>
  )
}

export default Contact
