import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import './post.css';
import { API } from '../../../service/api';

const Post = ({ post }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = async() => {
        setIsFavorited(!isFavorited);
        let response = await API.addFavourites({ postId: post._id });
        if (response.isSuccess) {
            alert('Post added to favourites');
        } else {
            alert('Failed to add post to favourites');
        }
    };

    const url = post.picture
        ? post.picture
        : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

    const handleClick = async() => {
        console.log(post._id);
        let response = await API.addLibrary({ postId: post._id });
        if (response.isSuccess) {
            alert('Post added to library');
        } else {
            alert('Failed to add post to library');
        }
    }

    return (
        <div className="post-container">
            <Link to={`details/${post._id}`} className='post-link-link-link'>
            <img className="post-image" src={url} alt="post" />
            </Link>
            <p className="post-category">{post.categories}</p>
            <Link to={`details/${post._id}`} className='post-link-link-link'>
            <div className="post-heading">{post.title}</div>
            </Link>
            <p className="post-author">Author: {post.username}</p>
            <div className="post-actions">
                <button onClick={handleClick} className="post-button-library">
                    <FaPlus className="button-icon" />
                    Add to Reading List
                </button>
                <div
                    className={`post-button-heart ${isFavorited ? 'clicked' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    <FaHeart className="button-icon" />
                </div>
            </div>
        </div>
    );
};

export default Post;