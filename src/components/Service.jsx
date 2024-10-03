import React from 'react';
import '../assets/styles/components/Service.css';

const Service = () => {
    return (
        <section className="service-wrapper py-3">
            <div className="container-fluid pb-3">
                <div className="row">
                    <h2 className="h2 text-center col-12 py-5 semi-bold-600">Services</h2>
                    <div className="service-header col-2 col-lg-3 text-end light-300">
                        <i className="fa-solid fa-gift h3 mt-1"></i>
                    </div>
                    <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
                        <h2 className="h3 pb-4 typo-space-line">Make Success for future</h2>
                        <div className="line"></div>
                    </div>
                </div>
                <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
                    You are free to use this template for your commercial or business websites. You are not allowed to
                    re-distribute this template ZIP file on any template collection websites. It is too easy to illegally
                    copy and repost this template.
                </p>
            </div>

            <div className="service-tag py-5 bg-secondary">
                <div className="col-md-12">
                    <ul className="nav d-flex justify-content-center">
                        <li className="nav-item mx-lg-4">
                            <a className="filter-btn active nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300"
                                href="#" data-filter=".project">All</a>
                        </li>
                        <li className="nav-item mx-lg-4">
                            <a className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                                href="#" data-filter=".graphic">Graphics</a>
                        </li>
                        <li className="filter-btn nav-item mx-lg-4">
                            <a className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                                href="#" data-filter=".ui">UI/UX</a>
                        </li>
                        <li className="nav-item mx-lg-4">
                            <a className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300"
                                href="#" data-filter=".branding">Branding</a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Service
