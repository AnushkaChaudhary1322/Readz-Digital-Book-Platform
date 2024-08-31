import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import './createPost.css';
import Header from '../header/Header';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);
    const textAreaRef = useRef(null); // Define the ref

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const getImage = async () => { 
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                setPost(prevPost => ({ ...prevPost, picture: response.data }));
            }
        };
        getImage();
        setPost(prevPost => ({
            ...prevPost,
            categories: location.search?.split('=')[1] || 'All',
            username: account.username
        }));
    }, [file]);

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'; // Reset height
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'; // Adjust height based on content
        }
    }, [post.description]);

    const savePost = async () => {
        await API.createPost(post);
        navigate('/');
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <>

        <Header/>

        <div className='create-post-container-wrapper'>

        <div className='create-post-container-heading'>
            <h1>Write Your Own Story</h1>
        </div>

        <div className="create-post-container">
            <img className="create-post-image" src={url} alt="post" />

            <div className="create-post-form">
                <label htmlFor="fileInput" className="file-upload-label">
                    <span className="add-icon">+</span>
                </label>
                <input
                    type="file"
                    id="fileInput"
                    className="file-input"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input
                    className="input-text-field"
                    onChange={(e) => handleChange(e)}
                    name='title'
                    placeholder="Title"
                />
                <button
                    className="create-publish-button"
                    onClick={savePost}
                >
                    Publish
                </button>
            </div>

            <textarea
                ref={textAreaRef} // Attach ref to textarea
                className="textarea"
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)}
                value={post.description}
            />
        </div>
        </div>

        </>
    );
};

export default CreatePost;
