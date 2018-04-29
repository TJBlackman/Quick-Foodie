import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import addRecipe from './addRecipeReducer';

const Root_Reducer = combineReducers({
  recipes: addRecipe,
  form: formReducer
});

export default Root_Reducer;
