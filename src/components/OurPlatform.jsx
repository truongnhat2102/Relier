import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/db';
import '../assets/styles/components/OurPlatform.css';
import Title from './Title';
const OurPlatform = () => {
  return (
    <div className='mt-5 container'>
      <Title />
      <div className='d-flex align-items-center justify-content-center mt-2'>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
          <img className='w-75' src={assets.time} alt="this is img" />
          <p className='info-item-program'>Time Optimization</p>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
          <img className='w-75' src={assets.cost_saving} alt="this is img" />
          <p className='info-item-program'>Cost Savings</p>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
          <img className='w-75' src={assets.international} alt="this is img" />
          <p className='info-item-program'>International Resources</p>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
          <img className='w-75' src={assets.seed} alt="this is img" />
          <p className='info-item-program'>Seed Investment</p>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center gap-5'>
          <img className='w-75' src={assets.professional} alt="this is img" />
          <p className='info-item-program'>Professional</p>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-4'>
        <button className='btn-learn-more'>LEARN MORE</button>
        <button className='btn-apply-now'><NavLink to='/contact' className='item-link'>APPLY NOW</NavLink></button>
      </div>
    </div>
  )
}

export default OurPlatform