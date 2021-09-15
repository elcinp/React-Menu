import React from 'react';

const Categories = () => {
  return(
    <div className="btn-container">
      {Categories.map((categories,index) => {
        return(
          <button>
            {category}
          </button>
        )
      })}
    </div>
  )
};

export default Categories;
