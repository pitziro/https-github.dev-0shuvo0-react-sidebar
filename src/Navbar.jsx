import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from './categorias.json';
import './Navbar.css';

const Navbar = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  const toggleSubcategories = () => {
    setShowSubcategories(!showSubcategories);
  };

  const hideSubcategories = () => {
    setShowSubcategories(false);
  };

  const renderSubcategories = (subcategories) => {
    return subcategories.map((subcategory) => {
      return (
        <Link to={subcategory.link} key={subcategory.id}>
          <div className="subcategory">{subcategory.name}</div>
        </Link>
      );
    });
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <div
          key={category.id}
          className="category"
          onMouseEnter={toggleSubcategories}
        >
          <Link to={category.link}>{category.name}</Link>
          {showSubcategories && (
            <div className="subcategories">
              {renderSubcategories(category.subcategories)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="navbar" onClick={hideSubcategories}>
      <Link to="/" className="logo">
        MyWebsite
      </Link>
      <div className="categories">{renderCategories()}</div>
    </div>
  );
};

export default Navbar;
