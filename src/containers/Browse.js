import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import BrowseList from '../components/BrowseList';

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_value: ''
    };
  }

  filterRecipes = () => {
    const { search_value } = this.state;
    const { recipes } = this.props;
    if (!search_value.length) {
      return recipes;
    } else {
      return recipes.filter(item => {
        return (
          item.title.toLowerCase().includes(search_value.toLowerCase()) ||
          item.tags.toLowerCase().includes(search_value.toLowerCase())
        );
      });
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          value={this.state.value}
          changeHandler={e => this.setState({ search_value: e.target.value })}
        />
        <BrowseList recipes={this.filterRecipes()} />
      </div>
    );
  }
}

function mapStateToProps({ recipes }) {
  return { recipes };
}

export default connect(mapStateToProps)(Browse);
