import React from 'react';
import heroImg from '../assets/heroImg.svg'
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <header className="hero container">
        <div className="hero-content">
            <div className="intro-text">
                <p className="intro-text-title">Best E - Wallet</p>
                <h1>
                    <p>Track</p>
                    <p>Save</p>
                    <p>Grow</p>
                </h1>
                <p className="intro-text-desc">With Expense Tracker, you can manage your finances effectively. Monitor your spending, set budgets, and achieve your financial goals. Enjoy a seamless experience with personalized insights and tips to help you save more and grow your wealth. Dive into a world of financial freedom and take control of your money today.</p>
                <Link to="/view-list" className="cta-button">Explore</Link>
            </div>
            <div className="intro-image-container">
                <img src={heroImg} />
            </div>
        </div>
    </header>
  )
}

export default HeroSection;
