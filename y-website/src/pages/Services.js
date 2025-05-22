import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Services = () => {
  return (
    <div className="container mt-4" data-aos="fade-up">
      <h1>Services We Offer</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <i className="fas fa-comment-medical fa-3x mb-3"></i>
              <h5 className="card-title">Individual Therapy</h5>
              <p className="card-text">Just you + a safe space to unpack your thoughts, vibe check your feelings, and work on your mental glow-up.</p>
              <a href="/services/individual" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <i className="fas fa-users fa-3x mb-3"></i>
              <h5 className="card-title">Teen & Adolescent Therapy</h5>
              <p className="card-text">For all the big feels, identity stuff, and 'no one gets me' moments—this is your space to be real.</p>
              <a href="/services/teen" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        {/* Add more cards for other services */}
      </div>
    </div>
  );
};

export default Services;