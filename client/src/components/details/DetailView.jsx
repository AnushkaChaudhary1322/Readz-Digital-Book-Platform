import React from 'react';
import Header from '../header/Header';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';
import './detailView.css';
import { FaPlus } from 'react-icons/fa';

const DetailView = () => {
    const defaultImageUrl = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.getPostById(id);
                if (response.isSuccess) {
                    setPost(response.data);
                } else {
                    console.error('Failed to fetch post:', response.message);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchData();
    }, [id]);

    const deleteBlog = async () => {
        try {
            await API.deletePost(post._id);
            navigate('/');
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    // Utility function to format text with line breaks
    const formatText = (text) => {
        return text?.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <>

        <Header/>

        <div className="detail-container-wrapper">

            {/* Book Image */}
            <img className="detail-image" src={post.picture || defaultImageUrl} alt="post" />

            {/* Icon Edit and Delete */}
            <div className="detail-icon-container">
            {account.username === post.username && (
                <>
                    <Link to={`/update/${post._id}`} className="detail-link">
                        <div className="detail-icon-wrapper-edit">
                            <span>Edit&emsp;</span>
                            <span className="detail-edit-icon">&#128394;</span>
                        </div>
                    </Link>
                    <div className="detail-icon-wrapper-delete" onClick={deleteBlog}>
                        <span>Delete&emsp;</span>
                        <span className="detail-delete-icon">&#128465;</span>
                    </div>
                </>
                )}
            </div>

            <div className="detail-heading">
            <h1>{post.title}</h1>
            </div>

            {/* Author Details and Date */}
            <div className="detail-author">
                <div>
                    <div className='detail-author-img'>
                        <img src="https://i.pinimg.com/236x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="author" />
                    </div>

                    <div className='detail-author-name-container'>
                        <Link to={`/?username=${post.username}`} className="detail-author-link">
                        <p>Author: <span className="detail-author-name">{post.username}</span></p>
                        </Link>
                    </div>
                </div>

                <div className="detail-date">
                    <p>{new Date(post.createdDate).toDateString()}</p>
                </div>
                
                <button className="detail-follow-btn">
                    <FaPlus className="button-icon" />
                    Follow
                </button>
            </div>

            <div className="detail-content">
                {formatText(post.description)}
            </div>

            <Comments post={post} />
        </div>
        </>
    );
};

export default DetailView;
