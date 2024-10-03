import React from 'react';
import '../assets/styles/components/BannerWork.css';
import '../assets/styles/components/Button.css';
const BannerWork = ({ text1, text2 }) => {
    return (
        <div id="work_banner" className="banner-wrapper bg-light w-100 py-5">
            <div className="banner-vertical-center-work container text-light d-flex justify-content-center align-items-center py-5 p-0">
                <div className="banner-content col-lg-8 col-12 m-lg-auto text-center">
                    <h1 className="banner-heading h2 display-3 pb-5 semi-bold-600 typo-space-line-center">{text1}</h1>
                    <h5 className="h4 pb-2 regular-400"> {text2}</h5>
                    {/* <button type="submit" className="btn rounded-pill btn-outline-light px-4 me-4 light-300">Learn More</button>
                    <button type="submit" className="my-button"><Link to='/contact'>Contact Us</Link></button> */}
                </div>
            </div>
        </div>
    )
}

export default BannerWork