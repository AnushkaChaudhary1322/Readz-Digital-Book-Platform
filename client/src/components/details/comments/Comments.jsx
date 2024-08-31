import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';
import Comment from './Comment';
import './comments.css';

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
};

const Comments = ({ post }) => {
    const url = 'https://i.pinimg.com/236x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg';

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    };

    const addComment = async () => {
        await API.newComment(comment);
        setComment(initialValue);
        setToggle(prev => !prev);
    };

    return (
        <div className="comments-box">
            <div className='commenr-box-heading'>
                <h3>Add your comments</h3>
            </div>
            <div className="comments-container">
                <img className="comments-image" src={url} alt="dp" />
                <textarea 
                    className="styled-textarea"
                    rows={1}
                    onChange={(e) => handleChange(e)}
                    value={comment.comments}
                />
                <button 
                    className="post-button"
                    onClick={(e) => addComment(e)}
                >Post</button>             
            </div>
            <div>
                {comments && comments.length > 0 && comments.map(comment => (
                    <Comment key={comment._id} comment={comment} setToggle={setToggle} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
