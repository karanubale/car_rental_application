import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTripData } from '../redux/tripSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/HomePage.css';
// import arrow from "../images/arrow.png";

const HomePage = () => {
    const [tripOption, setTripOption] = useState('outstation');
    const [tripType, setTripType] = useState('oneWay');
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        pickUpDate: '',
        pickUpTime: '',
        returnDate: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleExploreCabs = () => {
        // Check if all the required fields are filled
        const { from, to, pickUpDate, pickUpTime } = formData;

        if (!from || !to || !pickUpDate || !pickUpTime) {
            alert('Please fill in all required fields.');
            return; // Prevent the function from proceeding if fields are empty
        }

        // If everything is filled, dispatch the trip data and navigate to ExploreCab page
        dispatch(saveTripData({ ...formData, tripOption, tripType }));
        console.log('Trip data saved:', { ...formData, tripOption, tripType });
        navigate('/explore-cabs'); // Navigate to ExploreCab page
    };

    const renderInputFields = () => {
        const tripFields = (
            <>
                <div className="input-row">
                    <input
                        type="text"
                        name="from"
                        placeholder="FROM"
                        value={formData.from}
                        onChange={handleInputChange}
                        required
                    />
                    <img src="https://s3-alpha-sig.figma.com/img/2376/2a9f/9c699e0fa8dfcbf8108c0f40b98ef61d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQmxci~lrLw~aN009aapnv71diJtfAvag96YIHAm9By3ooDz53HmIdTNNlPjVAdh-hq9qIWH2P7o89JytK5EoxmYnBXpUXYm-mTFgUcW0LFaXfdzKPIC8BqjsSac8m~gALwYpKyC-UAiRLmCOV6KS~LImOZN2PIA5-xnl0RnKUptni48yNLsj5D5C7fVYQfaopouq0ecaS65ZbTFy13mWnYy6xP3X8-A~lXx-JxOPzs4jkzpN0lM8Suh31GbheVTI-nftqqmWgD~ZBHkDZ09xQUT-Az2V9npKSyTTGyFZJeLifxfFzPZJ6PoW20GD0R4tNBMJJ~yA5hTse~dSGUN1A__" alt="" width='30px' height='0px' />
                    <input
                        type="text"
                        name="to"
                        placeholder="TO"
                        value={formData.to}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <input
                    className="date-input"
                    type="date"
                    name="pickUpDate"
                    placeholder="PICK UP DATE"
                    
                    value={formData.pickUpDate}
                    onChange={handleInputChange}
                    required
                />
                <input
                    className="time-input"
                    type="time"
                    name="pickUpTime"
                    placeholder="PICK UP AT"
                    value={formData.pickUpTime}
                    onChange={handleInputChange}
                    required
                />
            </>
        );

        const roundTripFields = (
            <>
                {tripFields}
                <input
                    className="date-input"
                    type="date"
                    name="returnDate"
                    placeholder="RETURN DATE"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                />
            </>
        );

        switch (tripOption) {
            case 'outstation':
                return tripType === 'oneWay' ? tripFields : roundTripFields;
            case 'airport':
                return (
                    <>
                        {tripFields}
                        {/* <input
                            type="text"
                            name="trip"
                            placeholder="TRIP"
                            onChange={handleInputChange}
                        /> */}
                    </>
                );
            case 'local':
                return (
                    <>
                        <input
                            type="text"
                            name="pickUpCity"
                            placeholder="PICK UP CITY"
                            onChange={handleInputChange}
                        />
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
                    <button className="explore-btn" onClick={handleExploreCabs}>
                        EXPLORE CABS
                    </button>
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
