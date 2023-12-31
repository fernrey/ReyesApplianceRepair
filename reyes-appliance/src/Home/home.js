import './index.css';
import React from 'react';

import image from '../images/image.png';
import appliance from '../images/appliance.png';
import appliance2 from '../images/appliance2.png';
import appliance3 from '../images/appliance3.png';
import appliance4 from '../images/appliance4.png';
import appliance5 from '../images/appliance5.png';
import appliance6 from '../images/appliance6.png';
import maintenance from '../images/maintenence-guy.jpg';
import appliances from '../images/appliances.jpg';

const info = [
    {
        image: appliance,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
        image: appliance2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
        image: appliance3,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
        image: appliance4,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
        image: appliance5,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
    {
        image: appliance6,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
    },
];

function Home() {
    return (
        <div className='homePage'>
            <section className="upper-header">

                <div className='title-info'>
                    <img className="image-title" src={appliances} />
                    <div className="title-top">
                    </div>
                    <div className="title-intro">
                        <p>COMMITED TO FIXING ALL YOUR HOME APPLIANCES <br />  
                            LOCATED ALL OVER NYC

                            SAMPLE TEXT ETC ETC
                        </p>
                        <button className="contact"> Call Us</button>
                        <button className="learn-more"> Email Us</button>
                    </div>
                </div>
            </section>
            <section className="middle-page">
                <div className="top-middle">
                    <div className="top-text">
                        <h1>WE OFFER FAIR AND HONEST ASSESSMENTS
                            CONTACT US!</h1>
                        <h2>AVAILABLE IN ALL NEW YORK CITY BOROUGHS
                            MONDAY - FRIDAY 9AM-8PM</h2>
                    </div>
                </div>
                <div className="middle-Inner">
                    <div className="left-content">
                        <div className="left-text">NEED HELP
                            <span className="right-text"> FINDING THE PROBLEM?</span>
                        </div>
                        <h3>WE ARE DEDICATED TO PROVIDING HONEST QUALITY APPLIANCE REPAIR SERVICES. WE TAKE PRIDE IN OFFERING HONEST & FAIR ASSESSMENTS, FOR ALL YOUR MAJOR HOME APPLIANCE REPAIR NEEDS. WHICH INCLUDE REFRIGERATORS, CLOTHES WASHERS AND DRYERS, STOVES, OVENS, DISHWASHERS. YOU NAME IT!
                            CALL FOR RELIABLE SERVICE!</h3>
                        <button className="middle-button">Call (347)-256-0951</button>
                    </div>

                    <div className="right-content">
                        <img className="middle-image" src={image} alt="image of appliance" />
                    </div>
                </div>
                <div className="bottom-middle">
                    <div className="bottom-text">
                        <h1>OUR DIAGNOSTIC FEE IS FREE FOR THE FIRST TIME. </h1>
                        <h3>*$49.99 WHICH CAN BE WAIVED AFTER ANY REPAIR*</h3>
                    </div>
                </div>
            </section>
            <section className="bottom-page">
                <p>DID SOMETHING BREAK? <br />
                    <span>WE SPECIALIZE IN A VARIETY OF APPLIANCES</span></p>
                <h4 className="card-title">Residential Appliance Repairs & Services</h4>
                <div className="cards">
                    {info.map(result => (
                        <div className="cards-content">
                            <img className="image-card" src={result.image} alt="image" />
                            <div className="upper-card">
                                {result.content}
                            </div>
                            <div className="lower-card">
                                <button className="card-button">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;