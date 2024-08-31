import { useContext } from "react";
import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";
import './comment.css';
import { ImBin2 } from "react-icons/im";

const Comment = ({ comment, setToggle }) => {
    const { account } = useContext(DataContext);
    
    const removeComment = async () => {
        await API.deleteComment(comment._id);
        setToggle(prev => !prev);
    }

    return (
        <div className="comment-component">
            <div className="comment-container">
                <div className='comments-name-and-date-container'>
                    <div className='comments-name-container'>
                        <p className="comment-name">{comment.name}</p>
                    </div>
                    <div className='comments-date-container'>
                        <p className="comment-date">{new Date(comment.date).toDateString()}</p>
                    </div>
                </div>
            </div>
            <div className="comment-text-container">
                <p className="comment-text">{comment.comments}</p>
                {comment.name === account.username && (
                    <span className="comment-delete-icon" onClick={() => removeComment()}><ImBin2/></span>
                )}
            </div>
        </div>
    );
}

export default Comment;
