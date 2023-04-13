import React from 'react';
import '../../src/css/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faQuestion, faInfoCircle, faQuoteLeft, faQuoteRight, faChartLine, faBuilding, faBriefcase, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className='hero-text'>Invest in Your Future with Architect Equity</h1>
            <p className='hero-text'>Architect Equity is a leading private equity firm that helps investors build their wealth and achieve their financial goals. With our expert guidance and tailored investment strategies, you can trust us to help you invest in your future.</p>
            <a href="/services" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <h2>About Architect Equity <FontAwesomeIcon icon={faInfoCircle} /></h2>
            <p><FontAwesomeIcon icon={faQuoteLeft} /> Architect Equity is a leading private equity firm with years of experience in providing our clients with top-notch investment opportunities. Our team of dedicated professionals works tirelessly to deliver the best possible returns and personalized service to our clients. <FontAwesomeIcon icon={faQuoteRight} /></p>
            <a href="/about" className="btn btn-secondary">More</a>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">

          <div className="services-content">
            <div className="service">
              <h3><FontAwesomeIcon icon={faChartLine} /> Private Equity</h3>
              <p>Invest in private companies and enjoy the benefits of our expertise in identifying and capitalizing on the best opportunities.</p>
            </div>
            <div className="service">
              <h3><FontAwesomeIcon icon={faBuilding} /> Real Estate</h3>
              <p>Let us help you build a solid real estate portfolio that provides stable returns and long-term growth potential.</p>
            </div>
            <div className="service">
              <h3><FontAwesomeIcon icon={faBriefcase} /> Portfolio Management</h3>
              <p>Our experts will create and manage a diversified investment portfolio tailored to your individual needs and objectives.</p>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Contact Us <FontAwesomeIcon icon={faEnvelope} /></h2>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" rows="5"></textarea>
              <a className="buttontext" href="mailto:owenastringer@gmail.com?subject=Quote%20Request" target="_blank">
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;