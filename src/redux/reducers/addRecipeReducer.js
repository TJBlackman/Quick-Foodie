import { FORM_SUBMIT } from '../actions/form';
export default function(state = [], action) {
  switch (action.type) {
    case FORM_SUBMIT: {
      return [...state, action.payload].sort((a, b) => {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      });
    }
    default:
      return state;
  }
}
