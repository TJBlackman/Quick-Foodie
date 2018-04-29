import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { form_submit } from '../redux/actions/form';

// validation functions
const validation = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'A recipe title is required.';
  }
  if (!values.ingrediants) {
    errors.ingrediants = 'Please provide at least one ingrediant.';
  }
  if (!values.directions) {
    errors.directions = 'Please provide at least one direction.';
  }
  return errors;
};

const renderField = field => {
  return (
    <div className="form-group">
      <label>{field.label}</label>
      {field.element === 'input' && (
        <input
          {...field.input}
          type="text"
          className="form-control"
          name={field.name}
          placeholder={field.placeholder}
        />
      )}
      {field.element === 'textarea' && (
        <textarea {...field.input} className="form-control" name={field.name} />
      )}
      {field.meta.touched &&
        field.meta.error && <p className="text-danger">{field.meta.error}</p>}
    </div>
  );
};

class AddRecipeForm extends Component {
  submitFunction = values => {
    this.props.form_submit(values);
    this.props.history.push('/browse');
  };
  render() {
    return (
      <form
        id="recipe-form"
        onSubmit={this.props.handleSubmit(this.submitFunction)}
        className="clearfix"
      >
        <Field
          name="title"
          label="Recipe Title"
          type="text"
          element="input"
          placeholder="My Great Recipe"
          component={renderField}
        />
        <Field
          name="tags"
          label="Tags"
          type="text"
          element="input"
          placeholder="Spicy, Mexican, Quick To Make"
          component={renderField}
        />
        <Field
          name="ingrediants"
          label="Ingrediants"
          element="textarea"
          component={renderField}
        />
        <Field
          name="directions"
          label="Directions"
          element="textarea"
          component={renderField}
        />
        <button className="btn btn-primary float-right" type="submit">
          Submit
        </button>
        <Link to="/browse" className="btn btn-secondary">
          &lt; Back
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  validate: validation,
  form: 'add_recipe_form'
})(connect(null, { form_submit })(AddRecipeForm));
