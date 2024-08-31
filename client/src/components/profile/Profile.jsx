import React, { useState, useEffect } from "react";
import { API } from "../../service/api";
import Post from "../home/post/Post";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
        {message && <div>{message}</div>}
      </form>
      <div>
        <h1>Your posts</h1>
        {/* <div>
          {posts.map((post) => (
            <div key={post._id}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
            </div>
          ))}
        </div> */}
        <div className="posts-container">
            {
                posts?.length ? posts.map(post => (
                    <div key={post._id} className="post-item">
                        <Link to={`details/${post._id}`} className="post-link">
                            <Post post={post} />
                        </Link>
                    </div>
                )) : <div className="no-data">
                        No data is available for selected category
                    </div>
            }
        </div>
      </div>
    </div>
  );
}