import React from 'react';
import '../css/Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-content">
          <div className="service">
            <FontAwesomeIcon icon={faChartLine} />
            <h3>Private Equity</h3>
            <p>Invest in private companies with high growth potential.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <h3>Real Estate</h3>
            <p>Invest in real estate projects that offer high returns.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faBuilding} />
            <h3>Portfolio Management</h3>
            <p>Build a diversified investment portfolio that aligns with your financial goals and risk tolerance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;