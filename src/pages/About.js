import React from 'react';
import '../css/About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle, faDollarSign, faUserTie, faClock } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2><FontAwesomeIcon icon={faInfoCircle} /> About Us</h2>
          <p>At Architect Equity, we are committed to helping our clients achieve their financial goals through expert investment guidance and personalized service. With years of experience in private equity, real estate, and portfolio management, our team of dedicated professionals is here to help you build your wealth and invest in your future.</p>
          <ul>
            <li><FontAwesomeIcon icon={faCheckCircle} className="green-checkmark" /> Personalized investment strategies tailored to your needs</li>
            <li><FontAwesomeIcon icon={faCheckCircle}  className="green-checkmark"/> Expert guidance from a team of professionals with years of experience</li>
            <li><FontAwesomeIcon icon={faCheckCircle}  className="green-checkmark"/> Diversified portfolio management to minimize risk and maximize returns</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
