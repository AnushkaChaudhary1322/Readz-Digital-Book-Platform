import React, { useState, useEffect } from 'react';
import './about.css';
import Footer from '../footer/Footer';  
import quotesImage from './quotes.png';
import Header from '../header/Header';

const reviews = [
    {
        id: 1,
        image: 'https://i.pinimg.com/236x/ee/d4/34/eed434c10dd5640683a9c7b14cf98d77.jpg',
        name: 'Kathy James',
        review: 'This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1.',
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/236x/c0/f5/68/c0f56821adb79540e706645256280b3a.jpg',
        name: 'Chris Russo',
        review: 'This is the review content from customer 2. This is the review content from customer 2. This is the review content from customer 2. This is the review content from customer 2. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1.',
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/236x/73/27/e9/7327e988f6f192541f7bbed5110dc6d1.jpg',
        name: 'Sarah Andrews',
        review: 'This is the review content from customer 3. This is the review content from customer 3. This is the review content from customer 3. This is the review content from customer 3. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1.',
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/236x/d2/46/bb/d246bb3278c50acc754b9e5be109382c.jpg',
        name: 'Cassy Miller',
        review: 'This is the review content from customer 4. This is the review content from customer 4. This is the review content from customer 4. This is the review content from customer 4. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1.',
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/236x/78/56/0f/78560f787585bde1775f824e6fadcb5a.jpg',
        name: 'Jeremy Sokolov',
        review: 'This is the review content from customer 5. This is the review content from customer 5. This is the review content from customer 5. This is the review content from customer 5.This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1. This is the review content from customer 1.',
    },
];

const About = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeReview, setActiveReview] = useState(1);

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null); 
        } else {
            setActiveDropdown(index); 
        }
    };

    const handleReviewClick = (index) => {
        setActiveReview(index); 
    };

    return (
        <>

        <Header/>

        <div className="about-container">

            {/*banner */}
            <div className="banner-container about-banner">
            <img className="banner-gif" src="/AboutBanner.gif" alt="Banner GIF" />
        </div>
            
            {/* Section 1 */}
            <div className="content-wrapper-about">

                {/* Side image container */}
                <div className='about-image-container'>
                    <div className='about-image-one'>
                        <img src="https://i.pinimg.com/564x/e4/39/37/e4393736aa7b312f24de23c30301d0db.jpg" alt="img1"/>
                        <img src="https://i.pinimg.com/564x/bd/10/5f/bd105fb46eab2b5b75c3d07a2579bacb.jpg" alt="img1"/>
                    </div>
                    <div className='about-image-two'>
                        <img src="https://i.pinimg.com/564x/b4/ab/72/b4ab7222da63b12c06c8e3ba9290bd0b.jpg" alt="img1"/>
                    </div>
                </div>

                <div className='about-text-container'>
                    <h2>More About Our Website</h2>
                    <p className="about-text">
                        We live in an era where content is overflowing in the ever-growing internet. We live in an era where content is overflowing in the ever-growing internet. We live in an era where content is overflowing in the ever-growing internet. We live in an era where content is overflowing in the ever-growing internet.</p>

                    {/* Dropdown section */}
                    <div className="dropdown-about-container">
                        {/* Dropdown 1 */}
                        <div
                            className={`dropdown-about-1 ${activeDropdown === 1 ? 'active' : ''}`}
                            onClick={() => toggleDropdown(1)}
                            style={{ display: activeDropdown === null || activeDropdown === 1 ? 'block' : 'none' }}
                        >
                            <h4 className="dropdown-about-title">
                                Dropdown-about 1 
                                <span className={`dropdown-arrow ${activeDropdown === 1 ? 'rotate' : ''}`}>&#10095;</span>
                            </h4>
                            {activeDropdown === 1 && (
                                <div className="dropdown-about-content">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            )}
                        </div>

                        {/* Dropdown 2 */}
                        <div
                            className={`dropdown-about-2 ${activeDropdown === 2 ? 'active' : ''}`}
                            onClick={() => toggleDropdown(2)}
                            style={{ display: activeDropdown === null || activeDropdown === 2 ? 'block' : 'none' }}
                        >
                            <h4 className="dropdown-about-title">
                                Dropdown-about 2 
                                <span className={`dropdown-arrow ${activeDropdown === 2 ? 'rotate' : ''}`}>&#10095;</span>
                            </h4>
                            {activeDropdown === 2 && (
                                <div className="dropdown-about-content">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            )}
                        </div>

                        {/* Dropdown 3 */}
                        <div
                            className={`dropdown-about-3 ${activeDropdown === 3 ? 'active' : ''}`}
                            onClick={() => toggleDropdown(3)}
                            style={{ display: activeDropdown === null || activeDropdown === 3 ? 'block' : 'none' }}
                        >
                            <h4 className="dropdown-about-title">
                                Dropdown-about 3 
                                <span className={`dropdown-arrow ${activeDropdown === 3 ? 'rotate' : ''}`}>&#10095;</span>
                            </h4>
                            {activeDropdown === 3 && (
                                <div className="dropdown-about-content">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            )}
                        </div>

                        {/* Dropdown 4 */}
                        <div
                            className={`dropdown-about-4 ${activeDropdown === 4 ? 'active' : ''}`}
                            onClick={() => toggleDropdown(4)}
                            style={{ display: activeDropdown === null || activeDropdown === 4 ? 'block' : 'none' }}
                        >
                            <h4 className="dropdown-about-title">
                                Dropdown-about 4 
                                <span className={`dropdown-arrow ${activeDropdown === 4 ? 'rotate' : ''}`}>&#10095;</span>
                            </h4>
                            {activeDropdown === 4 && (
                                <div className="dropdown-about-content">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* Section 2 */}
            <div className='about-featured-books'>
                <div className='about-section2-heading'>
                    <h2>Our Featured Books</h2>
                </div>
                <div className='about-featured-books-content'>

                    <div className='about-featured-books-text'>
                        <img src="https://i.pinimg.com/564x/16/9c/58/169c587597ef75211a53a537698369d9.jpg" alt="img 1" />
                        <h3>Premium Books</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className='about-featured-books-btn'>Learn More</button>
                    </div>

                    <div className='about-featured-books-text'>
                        <img src="https://i.pinimg.com/564x/01/a1/77/01a177a102ee14075a791128c6a8a344.jpg" alt="img 1" />
                        <h3>Premium Books</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className='about-featured-books-btn'>Learn More</button>
                    </div>

                    <div className='about-featured-books-text'>
                        <img src="https://i.pinimg.com/564x/e7/b8/fe/e7b8fe1f537594ed41a5d9e6f5b8f844.jpg" alt="img 1" />
                        <h3>Premium Books</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className='about-featured-books-btn'>Learn More</button>
                    </div>


                </div>

            </div>

            {/* Section 3 */}
            <div className="review-container">
                <div className='review-container-heading'>
                        <h2>Our Customer Reviews</h2>
                </div>
            
                <div className='review-container-img-text'>
                    <div className='review-border-box'>
                    <img src={quotesImage} alt="quotes"  className='quotes-img1'/>
                    <div className="review-image-container">
                        {reviews.map((review) => (
                            <img
                                key={review.id}
                                src={review.image}
                                alt={review.name}
                                className={`review-image ${activeReview === review.id ? 'active' : ''}`}
                                onClick={() => handleReviewClick(review.id)}
                            />
                        ))}
                    </div>
                    <div className="review-content">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className={`review-text ${activeReview === review.id ? 'active' : ''}`}
                            >
                                <h4>{review.name}</h4>
                                <p>{review.review}</p>
                            </div>
                        ))}
                    </div>
                    <img src={quotesImage} alt="quotes"  className='quotes-img2'/>
                    </div>
                </div>

        </div>
            
            
        </div>
        <Footer />
        </>
    );
}

export default About;
