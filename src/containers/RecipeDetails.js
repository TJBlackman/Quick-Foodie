import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FormattedText from '../components/FormattedText';

const BackLink = () => {
  return <Link to="/browse">&lt; Back to all recipes</Link>;
};

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { recipe: null };
  }
  componentDidMount() {
    const {
      recipes,
      match: {
        params: { title }
      }
    } = this.props;
    const current_recipe = recipes.find(item => item.title === title);
    this.setState({ recipe: current_recipe });
  }
  render() {
    const { recipe } = this.state;
    if (!recipe) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <BackLink />
        <h2 className="mt-3">{recipe.title}</h2>
        <p className="text-muted">{recipe.tags}</p>
        <p className="lead font-weight-bold">Ingrediants</p>
        <FormattedText text={recipe.ingrediants} />
        <p className="lead font-weight-bold">Directions</p>
        <FormattedText text={recipe.directions} />
        <BackLink />
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(RecipeDetails);
