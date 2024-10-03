import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/pages/Investor.css';
import BannerWork from '../components/BannerWork';
import { StartUpContext } from '../service/StartUpContext';

const Investor = () => {
    const { investors } = useContext(StartUpContext);
    const [investorData, setInvestorData] = useState([]);

    useEffect(() => {
        setInvestorData(investors);
    }, [investors]);

    return (
        <div>
            <BannerWork text1={'Our Investors'} text2={'"We connect investors with strategic opportunities, where every investment not only drives growth but also shapes the future of innovation."'} />
            <div className="container mt-5">
                <div className="investor-container">
                    {investorData.map((item, index) => (
                        <div className="investor-item" key={index}>
                            <img src={item} alt="Investor logo" className="w-75" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Investor;
