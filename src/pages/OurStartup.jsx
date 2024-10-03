import React, { useContext, useEffect, useState } from 'react';
import BannerWork from '../components/BannerWork';
import { StartUpContext } from '../service/StartUpContext';
import { useNavigate } from 'react-router-dom';

const OurStartUp = () => {
  const { startups } = useContext(StartUpContext);
  const [startUps, setStartUps] = useState([]);
  const [filteredStartUps, setFilteredStartUps] = useState([]);
  const [selectedMajors, setSelectedMajors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // fetch data
  const fetchStartUpApi = async () => {
    setStartUps(startups);
    setFilteredStartUps(startups);
  }

  // handle navigation
  const handleNavigate = (id) => {
    navigate(`/start-up/${id}`);
  }

  // handle checkbox 
  const handleCheckboxChange = (e) => {
    const major = e.target.value;
    const isChecked = e.target.checked;

    let updatedMajors = [...selectedMajors];

    if (isChecked) {
      updatedMajors.push(major);
    } else {
      updatedMajors = updatedMajors.filter((item) => item !== major);
    }

    setSelectedMajors(updatedMajors);
  };

  // handle search by name
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // filter startups
  useEffect(() => {
    let filtered = startUps;

    if (searchTerm) {
      filtered = filtered.filter((startup) =>
        startup.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedMajors.length > 0) {
      filtered = filtered.filter((startup) =>
        selectedMajors.includes(startup.major)
      );
    }

    setFilteredStartUps(filtered);
  }, [startUps, selectedMajors, searchTerm]);

  useEffect(() => {
    fetchStartUpApi();
  }, []);

  const majors = ['Education', 'Technology', 'Finance', 'Beauty', 'Marketing', 'Logistics', 'Food & Beverage', 'Another'];

  return (
    <>
      <BannerWork text1={'Our Startups'} text2={'"Bridging the gap between bright ideas and boundless opportunities, we connect startups with the resources they need to grow and thrive"'} />
      <div className="container mt-5">
        <div className="row">
          {/* filter part */}
          <div className="col-md-3">
            <h5>Filter by Major</h5>
            <div className="card p-3 mb-4">
              {majors.map((major, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={major}
                    id={`checkbox-${major}`}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={`checkbox-${major}`}>
                    {major}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* search and startup list */}
          <div className="col-md-9">
            {/* Search box */}
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h2>Startups list</h2>
              <input
                type="text"
                className="form-control w-50"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            {/* startup cards */}
            <div className="row">
              {filteredStartUps.length > 0 ? (
                filteredStartUps.map((startup) => (
                  <div
                    className="col-md-4 mb-4"
                    key={startup._id}
                    onClick={() => handleNavigate(startup._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card h-100 shadow-sm" style={{ borderRadius: '15px' }}>
                      <img
                        src={startup.logoCompany}
                        alt="startup logo"
                        className="card-img-top"
                        style={{ borderRadius: '15px 15px 0 0', objectFit: 'cover', height: '200px' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{startup.name}</h5>
                        <p className="card-text">{startup.title}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No startups</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStartUp;
