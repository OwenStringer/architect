// src/components/ServicesPage.js
import React from 'react';
import '../css/ServicesPage.css';

function ServicesPage() {
    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <h1>Our Services</h1>
                        <p>Discover the wide range of services we offer to help you achieve your financial goals.</p>
                    </div>
                </div>
            </section>
            <section className="services-list">
                <div className="container">
                    <div className="services-grid">
                        {/* Add more service items as needed */}
                        <div className="service-item">
                            <h3>Private Equity</h3>
                            <p>Invest in high-potential private companies and grow your wealth through our expert guidance.</p>
                        </div>
                        <div className="service-item">
                            <h3>Real Estate</h3>
                            <p>Explore lucrative real estate investment opportunities with our comprehensive market analysis.</p>
                        </div>
                        <div className="service-item">
                            <h3>Portfolio Management</h3>
                            <p>Maximize your returns with our personalized portfolio management and risk assessment services.</p>
                        </div>
                        <div className="service-item">
                            <h3>Wealth Management</h3>
                            <p>Preserve and grow your wealth with tailored financial strategies and asset allocation advice.</p>
                        </div>
                        <div className="service-item">
                            <h3>Retirement Planning</h3>
                            <p>Ensure a comfortable retirement with our comprehensive retirement planning and pension fund management services.</p>
                        </div>
                        <div className="service-item">
                            <h3>Tax Planning</h3>
                            <p>Minimize your tax liabilities and optimize your financial situation with our expert tax planning services.</p>
                        </div>
                        <div className="service-item">
                            <h3>Insurance Solutions</h3>
                            <p>Protect your financial future with our wide range of insurance products and risk management services.</p>
                        </div>
                        <div className="service-item">
                            <h3>Estate Planning</h3>
                            <p>Preserve your legacy and ensure a smooth transfer of wealth to the next generation with our estate planning services.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default ServicesPage;
