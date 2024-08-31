import React, { useState, useEffect } from "react";
import { API } from "../../service/api";
import PostLib from "../home/post/PostLib";
import { Link } from "react-router-dom";
import './profilePage.css';
import WriteStory from '../home/WriteStory';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { TiMessages } from "react-icons/ti";

export default function Profile() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    profileImage: "",
  });
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user profile data
        const response = await API.getUser();
        if (response.isSuccess) {
          setFormData(response.data);
        } else {
          console.log(response.msg);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
    const fetchPosts = async () => {
      try {
        // Fetch the user's posts
        const response = await API.getUserPosts();
        if (response.isSuccess) {
          setPosts(response.data);
          console.log(posts.map((post) => post.image));
          
        } else {
          console.log(response.msg);
        }
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.updateUser(formData);
      if (response.isSuccess) {
        setMessage("Profile updated successfully");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      } else {
        console.log(response.msg);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>

      <Header/>

      <div className="userprofile-page-wrapper-parent">

        <div className="userprofile-page-wrapper">

        <div className="user-profile-form-div">
        <div className="profile-banner">
        </div>
        <div className="user-profile-img-form">
          <div className="user-profile-img">

          </div>
        <form onSubmit={handleSubmit} className="user-profile-form">
          <div className="user-profile-form-data-btn">
            <div className="user-profile-form-content">
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                className="user-profile-form-name"/> <br />
                <label className="user-profile-form-label">Username:</label><br />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="user-profile-form-email-user-page"/>
            </div>
            <div >
              <button type="submit" className="user-profile-form-update-btn">Update Profile</button>
            </div>
          </div>
          {message && <div>{message}</div>}
        </form>
        </div>
        </div>
        <div className="user-profile-your-books">
          <div className="user-profile-your-books-heading">
            <h2>Your Uploaded Books</h2>
          </div>
        <div className="user-profile-posts-container">
            {
                posts?.length ? posts.map(post => (
                    <div key={post._id} className="post-item">
                        <Link to={`details/${post._id}`} className="post-link">
                            <PostLib post={post} />
                        </Link>
                    </div>
                )) : <div className="no-data">
                        No data is available for selected category
                    </div>
            }
        </div>
        </div>
        </div>

        <div className="userproflie-right-column">
          <div className="userproflie-right-column">
              <div>
                <WriteStory/>
              </div>
              <div className="user-profile-blog-div">
                <h3>Tell Your Story</h3>
                <p>Keep everyone in the loop with your latest updates, ideas, and books. Let people discover what you've been working on!</p>
                <div className="user-profile-blog-btn">Start Sharing</div>
              </div>
              <TiMessages className="user-profile-blog-icon"/>
          </div>
        </div>
      </div>

      <Footer/>

    </>
  );
}