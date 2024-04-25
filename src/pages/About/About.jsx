//src/pages/About/About.jsx

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './About.css';

const About = () => {
    return (
        <div className="about">
        <Header />
        <main>
            <h1>About</h1>
            <p>Welcome to the about page</p>
        </main>
        <Footer />
        </div>
    );
    }

export default About;