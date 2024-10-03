import React from 'react';
import '../assets/styles/components/HeroBanner.css';
const HeroBanner = () => {
    return (
        <div className="banner-wrapper bg-light">
            <div id="index_banner" className="banner-vertical-center-index container-fluid pt-5">

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    {/* <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1
                                        className="banner-heading h1 text-secondary display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                        Welcome <strong>to the</strong> for
                                        <br /> "News & Events" section
                                    </h1>
                                    <p className="banner-body text-muted py-3 mx-0 px-0">
                                    Where we bring you the latest updates on the startup and investment ecosystem. Here, you'll find key events, hot news, and unmissable opportunities to connect promising startups with strategic investors.
                                        
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">

                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                    In the dynamic world of startups, information is the key to success.
                                    </h1>
                                    <p className="banner-body text-muted py-3">
                                    In "News & Events," we provide you with the latest news, events, and trends in the startup and investment sectors. Stay tuned to seize opportunities and connect with a thriving community of startups and potential investors.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item">

                            <div className="py-5 row d-flex align-items-center">
                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                    <h1 className="banner-heading h1 text-secondary display-3 mb-0 pb-3 mx-0 px-0 light-300">
                                    "News & Events" is the bridge 
                                    </h1>
                                    <p className="banner-body text-muted py-3">
                                    That helps you stay updated with the latest happenings in the startup and investment community.
                                    With regular updates on events, conferences, and networking opportunities, we offer you a comprehensive view of a vibrant and opportunity-rich startup ecosystem.
                                    </p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    <a className="carousel-control-prev carousel-control text-decoration-none" href="#carouselExampleIndicators" role="button"
                        data-bs-slide="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next carousel-control text-decoration-none" href="#carouselExampleIndicators" role="button"
                        data-bs-slide="next">
                        <i className="fa-solid fa-chevron-right"></i>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>

            </div>
        </div>

    )
}

export default HeroBanner
