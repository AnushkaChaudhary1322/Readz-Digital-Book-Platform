import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './categories.css';
import { TfiWrite } from "react-icons/tfi";

const WriteStory = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
      <>

      <div className="write-story-div">
        <h3 className='write-story-heading'>Share your own story with everyone</h3>
        <p>Get started now with your own story.</p>
        <p>Share your own world of imagination.</p>
        <Link to={`/create?category=${category || ''}`} className="write-story-button">
          Write story
        </Link>
      </div>

      <div className='writeStory-icon'>
      <Link to={`/create?category=${category || ''}`} className="write-story-button">
        <TfiWrite />
        </Link>
      </div>

      </>

  );
};

export default WriteStory;
