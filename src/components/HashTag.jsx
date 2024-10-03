import React from 'react';
import '../assets/styles/components/HashTag.css';
import { assets } from '../assets/db';

const HashTag = () => {
  return (
    <div className='hashtag container d-flex align-items-center justify-content-center m-5'>
      <div className='d-flex align-items-center justify-content-center gap-4'>
        <div className='img-container'>
          <img src={assets.hashtagService1} className='shadow p-3 mb-5' alt="this is hashtag" />
        </div>
        <div className='img-container'>
          <img src={assets.hashtagService2} className='shadow p-3 mb-5' alt="this is hashtag" />
        </div>
        <div className='img-container'>
          <img src={assets.hashtagService3} className='shadow p-3 mb-5' alt="this is hashtag" />
        </div>
      </div>
    </div>
  );
}

export default HashTag;
