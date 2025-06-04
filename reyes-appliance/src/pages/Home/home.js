import React from 'react';
import './home.css';
import Contact from '../../components/Contact/contact';

// Import images correctly
import hero from '../../assets/images/appliances.jpg';
import main from '../../assets/images/main.png';
import refrigerator from '../../assets/images/appliance.png';
import stove from '../../assets/images/appliance3.png';
import washer from '../../assets/images/appliance4.png';
import dryer from '../../assets/images/appliance5.png';
import dishwasher from '../../assets/images/appliance6.png';
import oven from '../../assets/images/appliance3.png';
import service from '../../assets/images/service.png';
import fridge from '../../assets/images/fridge.png';
import relationships from '../../assets/images/relationships.png';
import repairImage1 from '../../assets/images/reyes-appliance.jpg';
import repairImage2 from '../../assets/images/reyes-appliance1.jpg';

// Service data
const SERVICES = [
  {
    image: refrigerator,
    title: "Refrigerators",
    content: "We ensure your refrigerator runs efficiently, providing reliable cooling for food freshness and preservation."
  },
  {
    image: stove,
    title: "Stoves",
    content: "Our technicians keep your stove operating at peak performance for a safe and efficient cooking experience."
  },
  {
    image: washer,
    title: "Washing Machines",
    content: "From cycle issues to water problems, we maintain your washer for reliable, clean laundry every time."
  },
  {
    image: dryer,
    title: "Dryers",
    content: "We diagnose and repair all dryer issues to ensure your clothes dry properly and energy efficiency is maintained."
  },
  {
    image: dishwasher,
    title: "Dishwashers",
    content: "Our experts keep your dishwasher running efficiently, ensuring spotless dishes and a hygienic kitchen."
  },
  {
    image: oven,
    title: "Ovens",
    content: "We service all types of ovens to ensure precise temperatures and reliable performance for your cooking needs."
  },
];

// Benefits data
const BENEFITS = [
  {
    icon: "$",
    title: "Fair Pricing",
    content: "Transparent quotes with no hidden fees"
  },
  {
    icon: "⚡",
    title: "Quick Response",
    content: "Fast and reliable service available",
    isAccent: true
  },
  {
    icon: "✓",
    title: "Experienced Team",
    content: "Licensed technicians you can trust"
  }
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tagline">Professional Appliance Repair</span>
            <h1 className="hero-title">
              Brooklyn's Most <br />
              Trusted Repair Service
            </h1>
            <div className="hero-accent-line"></div>
            <p className="hero-description">
              Expert repair services for refrigerators, washers, stoves, and all major home appliances.
              Serving all NYC boroughs with same-day service.
            </p>
            <div className="hero-buttons">
              <a href="tel:347-256-0951" className="btn btn-primary">Call Now</a>
              <a href="mailto:reyesappliancerepairs@gmail.com" className="btn btn-accent">Email Us</a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image">
              <img src={repairImage1} alt="Appliance repair technician" />
              <div className="hero-image-accent top-left"></div>
              <div className="hero-image-accent bottom-right"></div>
            </div>
          </div>
        </div>

        <div className="hero-info-strip">
          <div className="hero-info-item">
            <div className="info-icon">$</div>
            <span>$64.99 Diagnostic Fee</span>
          </div>
          <div className="hero-info-item">
            <div className="info-icon">⚡</div>
            <span>Fast & Reliable Service</span>
          </div>
          <div className="hero-info-item">
            <div className="info-icon">✓</div>
            <span>All Major Brands</span>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="home-container">
          <div className="services-icons">
            <div className="service-icon-item">
              <div className="service-icon">❄️</div>
              <span>Fridges</span>
            </div>
            <div className="service-icon-item">
              <div className="service-icon">🧺</div>
              <span>Washers</span>
            </div>
            <div className="service-icon-item">
              <div className="service-icon">🔥</div>
              <span>Stoves</span>
            </div>
            <div className="service-icon-item">
              <div className="service-icon">👕</div>
              <span>Dryers</span>
            </div>
            <div className="service-icon-item">
              <div className="service-icon">🍽️</div>
              <span>Dishwashers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="home-container">
          <div className="value-content">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              Repair Service <br />
              You Can Trust
            </h2>
            <div className="section-accent-line"></div>
            <p className="section-description">
              When your appliances break down, our family-owned business delivers fast,
              reliable repairs at reasonable prices. Our licensed technicians have years of
              experience with all major brands.
            </p>
            <a href="tel:347-256-0951" className="btn btn-primary">Learn More</a>
          </div>

          <div className="value-image">
            <img src={repairImage2} alt="Appliance repair service" />
            <div className="image-backdrop"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="home-container">
          <h2 className="section-title centered">Why Choose Our Service</h2>
          <div className="section-accent-line centered"></div>

          <div className="benefits-grid">
            {BENEFITS.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className={`benefit-icon ${benefit.isAccent ? 'accent' : ''}`}>
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="home-container">
          <span className="section-tag centered">Our Expertise</span>
          <h2 className="section-title centered">Appliances We Repair</h2>
          <div className="section-accent-line centered"></div>

          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-card-inner">
                  <div className={`service-icon ${index % 2 !== 0 ? 'accent' : ''}`}>
                    {service.title === 'Refrigerators' ? '❄️' :
                      service.title === 'Stoves' ? '🔥' :
                        service.title === 'Washing Machines' ? '🧺' :
                          service.title === 'Dryers' ? '👕' :
                            service.title === 'Dishwashers' ? '🍽️' : '🍳'}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="home-container">
          <h2 className="section-title centered">Transparent Pricing</h2>
          <div className="section-accent-line centered"></div>

          <div className="pricing-cards">
            <div className="pricing-card">
              <h3 className="pricing-highlight accent">$64.99</h3>
              <h4 className="pricing-title">Diagnostic Fee</h4>
              <p className="pricing-description">Applied toward repair cost</p>
            </div>

            <div className="pricing-card">
              <h3 className="pricing-highlight accent">All NYC Boroughs</h3>
              <h4 className="pricing-title">Service Area</h4>
              <p className="pricing-description">Brooklyn, Queens, Manhattan & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-circles"></div>
        <div className="home-container">
          <h2 className="cta-title">Fast, Reliable Appliance Repairs</h2>
          <p className="cta-description">Don't stress over broken appliances - we've got you covered</p>
          <div className="cta-buttons">
            <a href="tel:347-256-0951" className="btn btn-accent">Call Now</a>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" >
        <div className="home-container">
          <h2 className="section-title centered">Get In Touch</h2>
          <div className="section-accent-line centered"></div>
          <p className="section-description centered">We're here to help with all your appliance repair needs</p>

          <div className="contact-info">
            <div className="contact-card">
              <h3>Call Us</h3>
              <p>(347)-256-0951</p>
            </div>

            <div className="contact-card">
              <h3>Email Us</h3>
              <p>reyesappliancerepairs@gmail.com</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="home-container">
          <h2 className="footer-title">Reyes Appliance Repair</h2>
          <p className="footer-info">
            Serving Brooklyn and NYC boroughs<br />
            Monday - Friday: 8AM-7PM | Saturday: 9AM-5PM | Sunday: Closed
          </p>
          <p className="footer-copyright">© 2025 Reyes Appliance Repair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;