import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StartUpContext } from '../service/StartUpContext';
import BannerWork from '../components/BannerWork';

const DetailsStartUp = () => {
    const { id } = useParams();
    const { startups } = useContext(StartUpContext);

    const startup = startups.find((item) => item._id === id);

    if (!startup) return <h2 className="text-center mt-5">Khong co!</h2>;

    return (
        <>
            <BannerWork text1={`Welcome, Hi I'm ${startup.name}`} text2={`Join us in transforming the tech industry with innovative solutions that enhance efficiency and simplify everyday tasks. At ${startup.name}, we believe in making the impossible possible. Let’s shape the future together!`} />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5">
                        <img
                            src={startup.logoCompnay}
                            alt="Logo of the startup"
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: '350px', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="col-md-7">
                        <h2 className="display-4 mb-3">{startup.name}</h2>
                        <p className="lead">{startup.title}</p>
                        <p>{startup.description}</p>
                        <div className="d-flex flex-row mt-4">
                            <button className="btn btn-primary me-3">Learn More</button>
                            <button className="btn btn-outline-secondary"><Link to='/contact'>Contact</Link></button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h3 className="mb-4">More about {startup.name}</h3>
                        <p>
                            This section can provide additional information about the startup's vision, milestones, or team.
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DetailsStartUp;
