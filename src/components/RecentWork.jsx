import React from 'react';
import { assets } from '../assets/db';
import { Link } from 'react-router-dom';

const RecentWork = () => {
    const recentWorkTitles = [
        'Legal and Accounting Services',
        'Portfolio Management',
        'Mentorship Matching',
    ];

    return (
        <div className='container'>
            <section className="py-5">
                <div className="row gx-3 gy-3">
                    {recentWorkTitles.map((title, index) => (
                        <div className="col-xl-4 col-md-6 project" key={index}>
                            <a href="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-auto hover-effect">
                                <img className="card-img" src={assets[`recentWork${index + 1}`]} alt="Card image" />
                                <div className="service-work-vertical card-img-overlay d-flex align-items-center justify-content-center">
                                    <div className="service-work-content text-center text-light">
                                        <Link to='/service'>
                                            <span className="btn btn-outline-light rounded-pill mb-3 px-4 light-300">{title}</span>
                                        </Link>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default RecentWork;
