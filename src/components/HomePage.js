import React, { useState } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    const [tripOption, setTripOption] = useState('outstation');
    const [tripType, setTripType] = useState('oneWay'); 

    const renderInputFields = () => {
        const tripFields = (
            <>
                <div className="input-row">
                    <input type="text" placeholder="FROM" />
                    <input type="text" placeholder="TO" />
                </div>
                <input className="date-input" type="date" placeholder="PICK UP DATE" />
                <input className="time-input" type="time" placeholder="PICK UP AT" />
            </>
        );

        const roundTripFields = (
            <>
                {tripFields}
                <input className="date-input" type="date" placeholder="RETURN DATE" />
            </>
        );

        switch (tripOption) {
            case 'outstation':
                return tripType === 'oneWay' ? tripFields : roundTripFields;
            case 'airport':
                return (
                    <>
                        {tripFields}
                        <input type="text" placeholder="TRIP" />
                    </>
                );
            case 'local':
                return (
                    <>
                        <input type="text" placeholder="PICK UP CITY" />
                        {tripFields}
                    </>
                );
            default:
                return null;
        }
    };


    return (
        <div className="home-container">
            <div className="banner">
                <div className="banner-content">
                    <h1>INDIA'S <span>LEADING ONE-WAY INTER-CITY</span> CAB SERVICE PROVIDER</h1>
                </div>
                <div className="form-container">
                    <div className="trip-options">
                        <button
                            className={`btn ${tripOption === 'outstation' ? 'active' : ''}`}
                            onClick={() => setTripOption('outstation')}
                        >
                            Outstation
                        </button>
                        <button
                            className={`btn ${tripOption === 'local' ? 'active' : ''}`}
                            onClick={() => setTripOption('local')}
                        >
                            Local
                        </button>
                        <button
                            className={`btn ${tripOption === 'airport' ? 'active' : ''}`}
                            onClick={() => setTripOption('airport')}
                        >
                            Airport
                        </button>
                    </div>

                    {tripOption === 'outstation' && (
                        <div className="trip-type">
                            <button
                                className={`btn ${tripType === 'oneWay' ? 'selected' : ''}`}
                                onClick={() => setTripType('oneWay')}
                            >
                                One Way
                            </button>
                            <button
                                className={`btn ${tripType === 'roundTrip' ? 'selected' : ''}`}
                                onClick={() => setTripType('roundTrip')}
                            >
                                Round Trip
                            </button>
                        </div>
                    )}

                    <div className="input-fields">
                        {renderInputFields()}
                    </div>
                    <button className="explore-btn">EXPLORE CABS</button>
                </div>
            </div>
            <div className="features">
                <div className="feature">
                    <h1>Transparent Billing</h1>
                    <p>GPS Based Billing | No Km Tampering</p>
                </div>
                <div className="feature">
                    <h1>Download Now!</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
                </div>
                <div className="feature">
                    <h3>No return fare</h3>
                    <p>One-Way cab fare | No hidden charges</p>
                </div>
            </div>

        </div>
    );
};

export default HomePage;

