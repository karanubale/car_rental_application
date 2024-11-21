import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ExploreCab.css';
const ExploreCab = () => {
    const tripData = useSelector((state) => state.trip); // Access Redux state

    return (
        <div className="explore-cabs-container">
            <h1>Explore Cabs(Below Data is Taken from at Redux State)</h1>
            <div className="trip-details">
                <p><strong>From:</strong> {tripData.from}</p>
                <p><strong>To:</strong> {tripData.to}</p>
                <p><strong>Pick-Up Date:</strong> {tripData.pickUpDate}</p>
                <p><strong>Pick-Up Time:</strong> {tripData.pickUpTime}</p>
                {tripData.returnDate && <p><strong>Return Date:</strong> {tripData.returnDate}</p>}
                <p><strong>Trip Option:</strong> {tripData.tripOption}</p>
                <p><strong>Trip Type:</strong> {tripData.tripType}</p>
            </div>

        </div>
    );
};

export default ExploreCab;
