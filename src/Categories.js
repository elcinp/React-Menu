import React from 'react';

const Categories = ({ categories,filterItems }) => {
  return(
    <div className="btn-container">
      {Categories.map((categories,index) => {
        return(
          <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
};

export default Categories;
