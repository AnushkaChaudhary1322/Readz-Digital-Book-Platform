import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';
import './update.css';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date()
};

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');
    const textAreaRef = useRef(null); // Define the ref

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                if (response.isSuccess) {
                    setPost(prevPost => ({ ...prevPost, picture: response.data }));
                    setImageURL(response.data);
                }
            }
        };
        getImage();
    }, [file]);

    const updateBlogPost = async () => {
        await API.updatePost(post);
        navigate(`/details/${id}`);
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto'; // Reset height
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'; // Adjust height based on content
        }
    }, [post.description]);

    return (
        <div className='update-content-wrapper-container'>
            <div className="update-container">
                <img className="update-image" src={post.picture || url} alt="post" />

                <div className="update-form">
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
                        value={post.title}
                        name='title'
                        placeholder="Title"
                    />
                    <button
                        className="update-button"
                        onClick={updateBlogPost}
                    >
                        Update
                    </button>
                </div>

                <textarea
                    ref={textAreaRef} // Attach ref to textarea
                    className="textarea"
                    placeholder="Tell your story..."
                    name='description'
                    onChange={handleChange}
                    value={post.description}
                />
            </div>
        </div>
    );
};

export default Update;
