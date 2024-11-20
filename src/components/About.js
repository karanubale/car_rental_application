import React from 'react';
import "../styles/About.css";
import hand from "../images/hand.png";
import location from "../images/location.png";
import image from "../images/image.png";
import family from "../images/family.png";
import pad from "../images/pad.png";
import flag from "../images/flag.png";
import dollar from "../images/dollar.png";


const About = () => {
    return (
        <div className="about-page">
            <div className="cards">
                <div className="card">
                    <img src={hand} alt="Return Fare Icon" height='73px' width='56px' />
                    <h3>RETURN FARE, NOT FAIR!</h3>
                    <p>
                        Why Pay For Return Journey When You Are Travelling One-Way?
                        Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost
                        For Your Oneway Travel.
                    </p>
                </div>
                <div className=" vertical-line"></div>
                <div className="card">
                    <img src={location} alt="GPS Icon" height='73px' width='56px' />
                    <h3>GPS BASED BILLING SYSTEM</h3>
                    <p>
                        Since The GPS Data Captures The Actual Distance And Time Traveled,
                        It Reduces The Chance Of Kilometer Tampering Or Discrepancies In Billing.
                    </p>
                </div>
                <div className=" vertical-line"></div>
                <div className="card">
                    <img src={image} alt="Routes Icon" height='73px' width='56px' />
                    <h3>NOW AVAILABLE ROUTES ARE!</h3>
                    <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
                </div>
            </div>
            <div className="description">
                <h2>India's Premier Intercity and Local Taxi Services</h2>
                <p>
                    At Yatri Cabs, we pride ourselves on being a top-tier online cab booking service, delivering reliable and premium intercity and local taxi services. With over a decade of experience, we have become the leading chauffeur-driven car rental company in India, renowned for our expansive coverage across the country.
                </p>
            </div>

            <div className="why-yatri">
                <div className="content">
                    <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/3e12/a35f/4a9fb448a7efbb2aeb909b40f4d485f6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYCzDmOT8hy0BECRzijZuKlvGxI3vafGKCY2jACvUCO6K2I9o1q9wXG-jafF-YDGSN3IXsmStOhrv48xSVtgPbLzaztZiuudHNXXy-7PI1k2BM9DGfSKLQ2X3-rxMyB6hCngrfCq0qymt1s0KdO4vKlSpAT7QoB-lHqmJB5A3E8iASAUDhoHpmAjMQb7MfbUgnAlbCi0Ldzd7oTZU0ilwEBCMYyjZRo1niamvYUbtaznuOAut~qMorWmJ9tsxBuB8sp~zu53YuLmIzGh9ge3EwhSBZ7y1DLmCIHxfa9XojzBmkZaDpG5zfytKNFaAEW~rvhQfr7cum42c~dWQuJ7Vw__" alt="Car" />
                    </div>
                    <div className="features1">
                            <h2>WHY <span className="highlight">YATRI</span> ?</h2>
                        <div className="feature1">
                            <img src={flag} alt="Fast Response Icon" />
                            <div>
                                <h3>FAST RESPONSE TIME</h3>
                                <p>
                                    Experience The Best Car Rental Service With Driver For Local Or Outstation Trips.
                                    Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly.
                                </p>
                            </div>
                        </div>
                        <div className="feature1">
                            <img src={family} alt="Vast Fleet Icon" />
                            <div>
                                <h3>VAST FLEET</h3>
                                <p>
                                    We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans,
                                    And Tempo Travellers To Meet All Your Needs.
                                </p>
                            </div>
                        </div>
                        <div className="feature1">
                            <img src={pad} alt="Easy to Order Icon" />
                            <div>
                                <h3>EASY TO ORDER</h3>
                                <p>
                                    Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application,
                                    Or By Calling Our Customer Support Team.
                                </p>
                            </div>
                        </div>
                        <div className="feature1">
                            <img src={dollar} alt="Great Tariffs Icon" />
                            <div>
                                <h3>GREAT TARIFFS</h3>
                                <p>
                                    Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive
                                    Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
