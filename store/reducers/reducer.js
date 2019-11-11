import { actionTypes } from "../actions";

export const exampleInitialState = {
  projects: [],
  form: {},
  blogs: []
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.PROJECTS_FAILURE:
    case actionTypes.BLOGS_FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.PROJECTS_SUCCESS:
      return {
        ...state,
        ...{ projects: action.data }
      };

    case actionTypes.BLOGS_SUCCESS:
      return {
        ...state,
        ...{ blogs: action.data }
      };

    default:
      return state;
  }
}

export default reducer;
