import React from 'react';
import { assets } from '../assets/db';
import { Link } from 'react-router-dom';

const ServiceBanner = () => {
    const recentWorkTitles = [
        'Legal and Accounting Services',
        'Portfolio Management',
        'Mentorship Matching',
    ];

    const contentOfService = [
        'Support startups in company formation, intellectual property protection, contracts and legal compliance.Provide accounting, tax, and financial management services for businesses.',
        'Assist in managing investment portfolios, tracking the performance of invested companies, and optimizing returns.Provide financial reports and market analysis to help investors closely monitor their investments.',
        'Help startups connect with industry professionals and potential mentors to support growth and development.',
    ];

    const handleSendEmail = (title) => {
        const email = 'hoanglong6939tcv@gmail.com';
        const subject = encodeURIComponent(`Booking Service: ${title}`);
        const body = encodeURIComponent(`Tui muon xem cai dich vu ni ben minh ne ban ${title}`);
        const mailToLink = `mailto:${email}?subject=${subject}&body=${body}`;

        window.location.href = mailToLink;
    }

    return (
        <div className='container'>
            <section className="py-5">
                <div className="row gx-4 gy-5">
                    {recentWorkTitles.map((title, index) => (
                        <div className="col-xl-4 col-md-6 d-flex justify-content-center" key={index}>
                            <div className="card border-0 shadow-sm overflow-hidden mx-auto" style={{ width: '100%', maxWidth: '350px' }}>
                                <a href="#" className="service-work text-white hover-effect">
                                    <img className="card-img" src={assets[`serviceBanner${index + 1}`]} alt="Service Banner" />
                                    <div className="service-work-vertical card-img-overlay d-flex flex-column justify-content-between align-items-center">
                                        <div className="service-work-content text-center text-light d-flex flex-column align-items-center justify-content-center">

                                            <span className="btn btn-outline-light rounded-pill mb-3 px-4 light-300">{title}</span>
                                            <button className="btn btn-primary"><Link to='/contact'>Booking</Link></button>
                                        </div>
                                    </div>
                                </a>
                                <div className="card-body">
                                    <p className="text-dark text-center px-3">{contentOfService[index]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServiceBanner;
