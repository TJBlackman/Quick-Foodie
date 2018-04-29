import React from 'react';
import { Link } from 'react-router-dom';

const renderListItems = array => {
  if (!array.length) {
    return <p className="lead text-muted">No saved recipes....</p>;
  }
  return array.map(item => {
    return (
      <li
        className="list-group-item d-flex justify-content-between"
        key={item.title}
      >
        <Link to={`/recipe/${item.title}`}>{item.title}</Link>
        <span className="text-muted">{item.tags}</span>
      </li>
    );
  });
};

export default ({ recipes }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {renderListItems(recipes)}
      </ul>
    </div>
  );
};
