import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import HashTag from '../components/HashTag';
import { StartUpContext } from '../service/StartUpContext';

const EventNews = () => {
  const { news } = useContext(StartUpContext);
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    setNewsData(news);
  };

  useEffect(() => {
    fetchNewsData();
    console.log(newsData);
  }, [newsData]);

  return newsData.length > 0 ? (
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center gap-5">
        <HeroBanner />
        <HashTag />
      </div>

      <div className="row">
        {newsData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={item.img}
                className="card-img-top"
                alt="News"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">{item.content}</p>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-outline-primary">{item.category}</button>
                <button className="btn btn-outline-secondary"><Link to='/contact'>More...</Link></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1 className="text-center">No news available!</h1>
  );
};

export default EventNews;
