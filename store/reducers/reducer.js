import { actionTypes } from "../actions";

export const exampleInitialState = {
  projects: [],
  form: {},
  blogs: [],
  blog: {},
  project: {},
  loading: false
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.PROJECTS_FAILURE:
    case actionTypes.BLOGS_FAILURE:
    case actionTypes.SINGLE_PROJECT_FAILURE:
    case actionTypes.SINGLE_BLOG_FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.PROJECTS_REQUEST:
    case actionTypes.BLOGS_REQUEST:
    case actionTypes.SINGLE_PROJECT_REQUEST:
    case actionTypes.SINGLE_BLOG_REQUEST:
      return {
        ...state,
        ...{ loading: true }
      };

    case actionTypes.PROJECTS_SUCCESS:
      return {
        ...state,
        ...{ projects: action.data, loading: false }
      };

    case actionTypes.BLOGS_SUCCESS:
      return {
        ...state,
        ...{ blogs: action.data, loading: false }
      };
    case actionTypes.SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        ...{ project: action.data, loading: false }
      };

    case actionTypes.SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        ...{ blog: action.data, loading: false }
      };

    default:
      return state;
  }
}

export default reducer;
