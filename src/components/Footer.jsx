import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.css';
const Footer = () => {
    const companyLinks = [
        { name: 'Home', href: 'index.html' },
        { name: 'Startups', href: 'about.html' },
        { name: 'Investor', href: 'work.html' },
        { name: 'Service', href: 'pricing.html' },
        { name: 'Event&News', href: 'contact.html' },
        { name: 'Contact', href: 'contact.html' },
    ];

    const works = [
        'Technology',
        'Education',
        'Marketing',
        'Food & Beverage',
        'Finance',
        'Beauty',
    ];

    const clientContacts = [
        { icon: 'fa-solid fa-phone', text: '010-020-0340', href: 'tel:010-020-0340' },
        { icon: 'fa-solid fa-paper-plane', text: 'relier@gmail.com', href: 'relier@gamil.com' },
    ];
    return (
        <footer className="footer-main bg-secondary pt-4">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-3 col-12">
                        <a className="navbar-brand" href="index.html">
                            <i className='bx bx-buildings bx-sm text-light'></i>
                            <span className="text-light h5">RELIER</span>
                        </a>
                        <p className="text-light my-2">
                            Connect startups with investors
                        </p>
                        <ul className="list-inline footer-icons">
                            {['facebook', 'linkedin', 'whatsapp', 'flickr', 'medium'].map((icon) => (
                                <li className="list-inline-item m-0" key={icon}>
                                    <Link className="text-light" target="_blank">
                                        <i className={`fa-brands fa-${icon}-`}></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 mt-4">
                        <h3 className="h4 pb-lg-3 text-light">Our Company</h3>
                        <ul className="list-unstyled text-light">
                            {companyLinks.map(link => (
                                <li className="pb-2" key={link.name}>
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i>
                                    <a className="text-decoration-none text-light" href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 mt-4">
                        <h3 className="h4 pb-lg-3 text-light">Our Works</h3>
                        <ul className="list-unstyled text-light">
                            {works.map(work => (
                                <li className="pb-2" key={work}>
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i>
                                    <a className="text-decoration-none text-light" href="#">{work}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 mt-4">
                        <h3 className="h4 pb-lg-3 text-light">Address</h3>
                        <ul className="list-unstyled text-light">
                            {clientContacts.map(contact => (
                                <li className="pb-2" key={contact.text}>
                                    <i className={`bx-fw ${contact.icon} bx-xs`}></i>
                                    <a className="text-decoration-none text-light" href={contact.href}>{contact.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
