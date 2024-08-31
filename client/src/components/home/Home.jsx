import React from 'react';
import Header from '../header/Header';
import './home.css'; 
import Banner from '../banner/Banner';
import Posts from './post/Posts';
import AcademicBooks from './academicbooks/AcademicBooks'; 
import PremiumBooksSlider from './premium/PremiumBooksSlider'; 
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <Banner />

            <div className="academic-section">
                <div className="section-heading">
                <h2 >Academic Related Books</h2>
                </div>
                <AcademicBooks /> 
            </div>

            <div className="premium-section">
                <div className="section-heading">
                <h2 >Premium Books</h2>
                </div>
                <PremiumBooksSlider />
            </div>

            <div className="main-content">
                <div className="categories-container">
                    {/* <Categories /> */}
                </div>
                <div className="home-posts-container">
                    <Posts />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
