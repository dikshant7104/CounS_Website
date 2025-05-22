import React from 'react';

const Home = () => {
  return (
    <div data-aos="fade-up">
      <section className="hero" style={{ backgroundColor: '#Fffdd0' }}>
        <div className="container text-center">
          <h1>Vibe Check ✓ Let's work on you, for you</h1>
          <p className="lead">A Gentle Space to Heal, Grow & Just Be</p>
          <a href="/contact" className="btn btn-primary btn-lg">Book a Session</a>
        </div>
      </section>
      <div className="container mt-4">
        <p>At Yashashrii.YourCounselor.in, we offer online therapy that feels like a warm cup of comfort for your mind...</p>
        <ul>
          <li>Support that's real. Sessions that fit your flow.</li>
          <li>Always private. Always with care.</li>
          <li>Qualified & Compassionate Psychologist</li>
          <li>100% Secure & Confidential</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;