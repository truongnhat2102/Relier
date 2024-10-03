import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/ViewOurWork.css';
const ViewOurWork = () => {
    return (
        <div className='view-our-work'>
            <section className="bg-secondary">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-2 col-12 text-light align-items-center">
                            <i className='display-1 bx bxs-box bx-lg'></i>
                        </div>
                        <div className="col-lg-7 col-12 text-light pt-2">
                            <h3 className="h4 light-300">SERVICE</h3>
                            <p className="light-300">"Innovate, Invest, and Succeed with Us"</p>
                        </div>
                        <div className="col-lg-3 col-12 pt-4">
                            <NavLink to='/' className="view-work-link btn btn-primary rounded-pill btn-block shadow px-4 py-2 text-white">View Our Work</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ViewOurWork