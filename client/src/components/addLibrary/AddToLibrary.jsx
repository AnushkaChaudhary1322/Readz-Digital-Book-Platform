import React, { useEffect, useState } from 'react';
import PostLib from '../home/post/PostLib';
import { API } from '../../service/api';
import NavSide from '../header/NavSide';
// import Footer from '../footer/Footer';
import './library.css';

export default function AddToLibrary() {
    const [posts, setPosts] = useState([]);
    const [activeSection, setActiveSection] = useState('library'); // State to toggle sections

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getLibraryPosts();
                if (response.isSuccess) {
                    setPosts(response.data);
                } else {
                    console.log(response.msg);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchData();
    }, []);

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <NavSide />

            <div className='library-container-wrapper'>
                <div className='library-main-heading'>
                    <h2>Library</h2>
                </div>

                {/* Selection Bar */}
                <div className='library-section-selector'>
                    <div 
                        className={`library-lib ${activeSection === 'library' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange('library')}
                    >
                        <h3>Reading List</h3>
                    </div>
                    <div 
                        className={`library-pre ${activeSection === 'premium' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange('premium')}
                    >
                        <h3>Premium</h3>
                    </div>
                    <div 
                        className={`library-aca ${activeSection === 'academic' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange('academic')}
                    >
                        <h3>Educational</h3>
                    </div>
                    <div 
                        className={`library-fav ${activeSection === 'favorite' ? 'active' : ''}`} 
                        onClick={() => handleSectionChange('favorite')}
                    >
                        <h3>Favorite</h3>
                    </div>
                </div>

                {/* Library Section */}
                <div 
                    className={`library-your-library-section ${activeSection === 'library' ? 'visible' : 'hidden'}`}
                >
                    <div className="posts-container-library-readingList">
                        {
                            posts?.length ? posts.map(post => (
                                <div key={post._id} className="post-item">
                                    <div className='post-link'>
                                        <PostLib post={post} />
                                    </div>
                                </div>
                            )) : <div className="no-data">
                                    Error adding to library. Please try again.
                                </div>
                        }
                    </div>
                </div>

                {/* Premium Section */}
                <div 
                    className={`library-your-premium-section ${activeSection === 'premium' ? 'visible' : 'hidden'}`}
                >
                    <h3>Your Premium Books Will Be Shown Here</h3>
                </div>

                {/* Academic Section */}
                <div 
                    className={`library-your-academic-section ${activeSection === 'academic' ? 'visible' : 'hidden'}`}
                >
                    <h3>Your Academic Books Will Be Shown Here</h3>
                </div>

                {/* Favorite Section */}
                <div 
                    className={`library-your-favorite-section ${activeSection === 'favorite' ? 'visible' : 'hidden'}`}
                >
                    <h3>Your Favorite Books Will Be Shown Here</h3>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}
