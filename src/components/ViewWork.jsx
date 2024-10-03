import { assets } from "../assets/db";
import '../assets/styles/components/ViewWork.css';
import ViewOurWork from "./ViewOurWork";
import { Link } from "react-router-dom";

const ViewWork = () => {
    const titles = [
        'Techonology',
        'Education',
        'Food & Beverage',
        'Finance',
        'Beauty',
        'Marketing',
        'Logitics',
        'Another'
    ];

    return (
        <>
            <div className='container mt-5'>
                <section className="py-5">
                    <div className="row gx-4 gy-4">
                        {titles.map((title, index) => (
                            <div className="col-xl-3 col-md-6 project" key={index}>
                                <a href="#" className="service-work card border-0 text-dark shadow-sm overflow-hidden mx-auto hover-effect" style={{ width: '100%', maxWidth: '400px' }}>
                                    <img className="card-img" src={assets[`service${index + 1}`]} alt="Card image" style={{ height: '250px', objectFit: 'cover' }} />
                                    <div className="service-work-vertical card-img-overlay d-flex align-items-center justify-content-center">
                                        <div className="service-work-content text-center text-dark">
                                            <Link to={'/our-start-up'}>
                                                <span className="btn">{title}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <ViewOurWork />
        </>
    );
}

export default ViewWork;
