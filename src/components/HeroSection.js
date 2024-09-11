import React from 'react';
import "../components/styles/HeroSection.css";
import { NavLink } from 'react-router-dom';
import HeroImage from "../components/assets/gourmet.jpg"

const HeroSection = () => {
  return (
    <div className="hero-section-background">
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon-Best place to find your food love</h1>
                <h2>Chicago</h2>
                <p>We are a family-run Mediterranean restaurant that combines traditional recipes with a modern touch.</p>
                <NavLink to="/reservations"><button className="btn">Make a reservation</button></NavLink>
            </div>
            <div className="section-right">
                <div className="image-box">
                    <img src={HeroImage} alt="Serving delicious dish" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
