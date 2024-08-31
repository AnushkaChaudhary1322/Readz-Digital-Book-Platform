import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './postLib.css';
import { API } from '../../../service/api';
import { ImBin2 } from "react-icons/im";

const PostLib = ({ post }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
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
            <img className="post-image" src={url} alt="post" />
            <p className="post-category">{post.categories}</p>
            <Link to={`details/${post._id}`} className='post-link-link-link'>
            <div className="post-heading">{post.title}</div>
            </Link>
            <p className="post-author">Author: {post.username}</p>
            <div className='postLib-delete-div'>
                <div className='postLib-delete-btn'>
                    <button className='postLib-delete-button'>Delete</button>
                    <ImBin2 />
                </div>
            </div>
            
        </div>
    );
};

export default PostLib;