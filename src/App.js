import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExploreCab from './components/ExploreCab';
import Navbar from './components/Navbar';
import About from './components/About';
import About2 from './components/About2';
import Footer from './components/Footer';
import "./App.css"
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore-cabs" element={<ExploreCab />} />
            </Routes>
            <About />
            <About2 />
            <Footer />
        </Router>
    );
}

export default App;
