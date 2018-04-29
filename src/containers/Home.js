import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="foodie-icon">
          <img src="/images/foodie-icon.jpg" alt="Quick Foodie" />
        </div>
        <div className="quick-nav">
          <Link to="/browse" className="btn btn-primary">
            Browse All Recipes
          </Link>
          <Link to="/add" className="btn btn-primary">
            Add New Recipe
          </Link>
        </div>
      </div>
    );
  }
}
