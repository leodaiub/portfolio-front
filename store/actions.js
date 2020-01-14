export const actionTypes = {
  PROJECTS_FAILURE: "PROJECTS_FAILURE",
  PROJECTS_REQUEST: "PROJECTS_REQUEST",
  PROJECTS_SUCCESS: "PROJECTS_SUCCESS",
  BLOGS_FAILURE: "BLOGS_FAILURE",
  BLOGS_REQUEST: "BLOGS_REQUEST",
  BLOGS_SUCCESS: "BLOGS_SUCCESS",
  SINGLE_PROJECT_FAILURE: "SINGLE_PROJECT_FAILURE",
  SINGLE_PROJECT_REQUEST: "SINGLE_PROJECT_REQUEST",
  SINGLE_PROJECT_SUCCESS: "SINGLE_PROJECT_SUCCESS",
  SINGLE_BLOG_FAILURE: "SINGLE_BLOG_FAILURE",
  SINGLE_BLOG_REQUEST: "SINGLE_BLOG_REQUEST",
  SINGLE_BLOG_SUCCESS: "SINGLE_BLOG_SUCCESS"
};

export function projectFailure(error) {
  return {
    type: actionTypes.PROJECTS_FAILURE,
    error
  };
}

export function projectRequest() {
  return { type: actionTypes.PROJECTS_REQUEST, payload: 0 };
}

export function projectSuccess(data) {
  return {
    type: actionTypes.PROJECTS_SUCCESS,
    data
  };
}

export function blogFailure(error) {
  return {
    type: actionTypes.BLOGS_FAILURE,
    error
  };
}

export function blogRequest(data) {
  return { type: actionTypes.BLOGS_REQUEST, payload: 0 };
}

export function blogSuccess(data) {
  return {
    type: actionTypes.BLOGS_SUCCESS,
    data
  };
}

export function singleProjectFailure(error) {
  return {
    type: actionTypes.SINGLE_PROJECT_FAILURE,
    error
  };
}

export function singleProjectRequest(id) {
  return { type: actionTypes.SINGLE_PROJECT_REQUEST, payload: id };
}

export function singleProjectSuccess(data) {
  return {
    type: actionTypes.SINGLE_PROJECT_SUCCESS,
    data
  };
}

export function singleBlogFailure(error) {
  return {
    type: actionTypes.SINGLE_BLOG_FAILURE,
    error
  };
}

export function singleBlogRequest(id) {
  return { type: actionTypes.SINGLE_BLOG_REQUEST, payload: id };
}

export function singleBlogSuccess(data) {
  return {
    type: actionTypes.SINGLE_BLOG_SUCCESS,
    data
  };
}
