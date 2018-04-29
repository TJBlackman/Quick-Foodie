import { createStore, compose } from 'redux';
import Root_Reducer from './reducers/index';

import recipes from '../recipes.json';

const Store_Default = {
  recipes: recipes,
  form: {}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Root_Reducer,
  Store_Default,
  composeEnhancers(/* middlewares here */)
);

export default store;
