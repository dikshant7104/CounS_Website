import React from 'react';

const FAQs = () => {
  return (
    <div className="container mt-4" data-aos="fade-up">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What can I expect in my first session?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Your first session will be a safe space to explore your concerns...
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Is therapy only for people with 'serious' issues?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              No, therapy is for anyone wanting to feel better or gain clarity...
            </div>
          </div>
        </div>
        {/* Add more FAQs */}
      </div>
    </div>
  );
};

export default FAQs;