import React from 'react'
import { assets } from '../assets/db'
import '../assets/styles/components/BannerStartUp.css'
const BannerStartUp = () => {
    return (
        <div>
            <section className="bg-light w-100">
                <div className="container">
                    <div className="row d-flex align-items-center py-5">
                        <div className="col-lg-6 text-start">
                            <h1 className="text-heading py-5 text-primary typo-space-line">Our Startups</h1>
                            <p className="light-300">
                                Bridging the gap between bright ideas and boundless opportunities, <br />we connect
                                startups with the resources they need to grow and thrive
                                {/* <a rel="nofollow" href="http://freepik.com/" target="_blank">FreePik</a>  */}
                                {/* website. Purple Buzz is provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur. */}
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={assets.banner_startup} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BannerStartUp