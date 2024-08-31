import React, { useState, useEffect } from 'react';
import './premiumBooksSlider.css'; // Import CSS for styling

const PremiumBooksSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Pride and Prejudice',
            description: 'Explores the complexities of love, social class, and personal growth through the romantic entanglements of Elizabeth Bennet and Mr. Darcy.',
            author:'Jane Austen',
            price: '₹119.00',
            imageUrl: 'https://i.pinimg.com/564x/2f/df/05/2fdf05ff5507132b9195dcf4cef6dc09.jpg'
        },
        {
            id: 2,
            title: 'The Powerless Witch',
            description: 'Gripping fantasy tale about a young witch who, stripped of her magic, must navigate a perilous world to reclaim her powers and uncover hidden truths.',
            author:'J.S. Hart',
            price: '₹95.00',
            imageUrl: 'https://i.pinimg.com/736x/c5/b9/dc/c5b9dcb04bc29295fe0411470ab335b9.jpg'
        },
        {
            id: 3,
            title: 'IKIGAI',
            description: 'The Japanese Secret to a Long and Happy Life, representing the intersection of passion, mission, vocation, and profession.',
            author:'Hector Garcia and Francesc Miralles',
            price: '₹70.00',
            imageUrl: 'https://i.pinimg.com/564x/18/02/72/1802722cd6052820166217d0b3b62db7.jpg'
        },
        {
            id: 4,
            title: 'Wings Of Fire',
            description: 'Journey from a humble background to becoming Indias esteemed President and a pioneering space scientist.',
            author:'APJ Abdul Kalam with Arun Tiwari',
            price: '₹130.00',
            imageUrl: 'https://i.pinimg.com/564x/02/68/cf/0268cfd46ddad318018f6df24e8aef92.jpg'
        },
        {
            id: 5,
            title: 'Life Of Pi',
            description: 'Following a young boys journey across the ocean with a Bengal tiger, exploring themes of faith, resilience, and the nature of reality',
            author:'Yann Martel',
            price: '₹104.00',
            imageUrl: 'https://i.pinimg.com/564x/8e/b8/d2/8eb8d2c013dc539b7a16624dbe132883.jpg'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="slider-premium-container">
            <button className="slider-premium-arrow left" onClick={handlePrevSlide}>
            &#10094;
            </button>
            <div className="slider-premium-content">
                <div className="slider-premium-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide-premium">
                            <div className="slide-premium-image-container">
                                <img src={slide.imageUrl} alt={slide.title} className="slide-premium-image" />
                            </div>
                            <div className="slide-premium-text">
                                <h3 className='slide-premium-text-title'>{slide.title}</h3>
                                <p className='slide-premium-text-para'>{slide.description}</p>
                                <b><i>{slide.author}</i></b>
                                <p className="price-premium">{slide.price}</p>
                                <button className="buy-now-button-premium">Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="slider-premium-arrow right" onClick={handleNextSlide}>
            &#10095;
            </button>
            <div className="slider-premium-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default PremiumBooksSlider;
