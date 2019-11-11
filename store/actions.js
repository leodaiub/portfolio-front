export const actionTypes = {
  PROJECTS_FAILURE: "PROJECTS_FAILURE",
  PROJECTS_REQUEST: "PROJECTS_REQUEST",
  PROJECTS_SUCCESS: "PROJECTS_SUCCESS",
  BLOGS_FAILURE: "BLOGS_FAILURE",
  BLOGS_REQUEST: "BLOGS_REQUEST",
  BLOGS_SUCCESS: "BLOGS_SUCCESS"
};

export function projectFailure(error) {
  return {
    type: actionTypes.PROJECTS_FAILURE,
    error
  };
}

export function projectRequest() {
  return { type: actionTypes.PROJECTS_REQUEST };
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

export function blogRequest() {
  return { type: actionTypes.BLOGS_REQUEST };
}

export function blogSuccess(data) {
  return {
    type: actionTypes.BLOGS_SUCCESS,
    data
  };
}
