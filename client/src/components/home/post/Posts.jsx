import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';
import Post from './Post';
import './posts.css'; 
import Categories from '../Categories';
import WriteStory from '../WriteStory';


const Posts = () => {
    const [posts, getPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        } 
        fetchData();
    }, [category]);

    return (
        <div className='category-section-container'>
            <div className='section-heading-category'>
                <h2>Most Popular Genre</h2>
            </div>
            <Categories/>
            <div className='home-posts-write-and-all-content'>
                <div className='home-posts-writeStory-div'>
                    <WriteStory/>
                </div>
                    <div className="posts-container-section">
                        {
                            posts?.length ? posts.map(post => (
                                <div key={post._id} className="post-item">
                                    <div className='post-link'>
                                        <Post post={post} />
                                    </div>
                                </div>
                            )) : <div className="no-data">
                                    No data is available for selected category
                                </div>
                        }
                    </div>

            </div>
        </div>
    )
}

export default Posts;