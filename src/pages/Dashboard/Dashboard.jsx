// src/pages/Dashboard/Dashboard.jsx

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Dashboard.css';

function Dashboard () {
    return (
        <div className="dashboard">
        <Header />
        <main>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard</p>
        </main>
        <Footer />
        </div>
    );
    }

export default Dashboard;