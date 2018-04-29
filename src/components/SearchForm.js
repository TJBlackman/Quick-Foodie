import React from 'react';
import { Link } from 'react-router-dom';

export default ({ value, changeHandler }) => {
  return (
    <form id="search-form" onSubmit={e => e.preventDefault()}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a recipe"
          onChange={changeHandler}
          value={value}
        />
        <div className="input-group-append">
          <Link className="btn btn-outline-primary" type="button" to="/add">
            + New Recipe
          </Link>
        </div>
      </div>
    </form>
  );
};
