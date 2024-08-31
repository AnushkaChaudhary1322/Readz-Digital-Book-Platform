import React, { useState } from 'react';
import './academicBooks.css'; // Import CSS for styling

const AcademicBooks = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Dummy data for academic books with image URLs
    const academicBooksData = [
        [
            { id: 1, title: 'Mathematics',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/de/22/e7/de22e71ff4ca61334f90619f472fe6c3.jpg' },
            { id: 2, title: 'Physics',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/ce/de/c2/cedec28ce950e71e658f1f7332d86caf.jpg' },
            { id: 3, title: 'Chemistry',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/32/2c/6b/322c6b271eb39e0b5d6907bbe280bbc0.jpg' },
            { id: 4, title: 'Biology',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/63/36/a5/6336a56eac071a0a00e35e28c176c8ca.jpg' },
            { id: 5, title: 'History',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/4e/f3/b6/4ef3b6bfd99e654889600b68d43b36ba.jpg' },
            { id: 6, title: 'Geography',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/ee/3c/20/ee3c2095c130c0678c630aa8299694a7.jpg' },
        ],
        [
            { id: 7, title: 'Economics',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/4a/54/98/4a549849e59fd3f14197af9c473e0b8b.jpg' },
            { id: 8, title: 'Political Science',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/1c/47/d2/1c47d2cbe2b817bdb47cce615c2566e7.jpg' },
            { id: 9, title: 'Computer Science',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/a1/32/c0/a132c0ac4b58cb6a1ab10bc8f8700cfa.jpg' },
            { id: 10, title: 'Philosophy',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/d6/b3/b0/d6b3b0b62f26884dab6477202ff43ffc.jpg' },
            { id: 11, title: 'Sociology',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/ed/48/c7/ed48c71bacf58d4cae9d954a62f44cfe.jpg' },
            { id: 12, title: 'Psychology',description: '2 Books newly added to the collection', imageUrl: 'https://i.pinimg.com/564x/c7/fe/72/c7fe72be616998b5ad59cc2918ba3bf2.jpg' },
        ],
    ];

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? academicBooksData.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === academicBooksData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="slider-academic-container">
            <button className="slider-academic-arrow left" onClick={handlePrevSlide}>
                &#9664;
            </button>
            <div className="grid-academic-container">
                {academicBooksData[currentSlide].map((book, index) => (
                    <div key={book.id} className={`grid-academic-item grid-academic-item-${index + 1}`}>
                        <div className="grid-academic-item-content">
                            <div>
                            <img src={book.imageUrl} alt={book.title} className="book-academic-image" />
                            </div>
                            <div className='book-academic-title'>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="slider-academic-arrow right" onClick={handleNextSlide}>
                &#9654;
            </button>
        </div>
    );
};

export default AcademicBooks;
