import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../../constants/data';
import './categories.css';

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="container-category">

      <div className="table-category">
        <Link to="/" className="table-link">All Genres</Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/?category=${category.type}`}
            className="table-link"
          >
            {category.type}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
