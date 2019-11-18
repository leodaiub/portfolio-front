import { all, put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import axios from "axios";

import {
  actionTypes,
  projectSuccess,
  blogSuccess,
  singleBlogSuccess,
  singleProjectSuccess,
  projectFailure,
  blogFailure,
  singleProjectFailure,
  singleBlogFailure
} from "../actions";

es6promise.polyfill();

function* loadDataProjects(action) {
  try {
    const data = yield axios.get(
      `https://portfolio-leodaiub.herokuapp.com/projects?page=${action.payload}`
    );

    yield put(projectSuccess(data.data));
  } catch (err) {
    yield put(projectFailure(err));
  }
}

function* loadDataBlogs(action) {
  try {
    const data = yield axios.get(
      `https://portfolio-leodaiub.herokuapp.com/posts?page=${action.payload}`
    );

    yield put(blogSuccess(data.data));
  } catch (err) {
    yield put(blogFailure(err));
  }
}

function* loadDataBlog(action) {
  try {
    const data = yield axios.get(
      `https://portfolio-leodaiub.herokuapp.com/posts/${action.payload}`
    );

    yield put(singleBlogSuccess(data.data));
  } catch (err) {
    yield put(singleBlogFailure(err));
  }
}

function* loadDataProject(action) {
  try {
    const data = yield axios.get(
      `https://portfolio-leodaiub.herokuapp.com/projects/${action.payload}`
    );

    yield put(singleProjectSuccess(data.data));
  } catch (err) {
    yield put(singleProjectFailure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.PROJECTS_REQUEST, loadDataProjects),
    takeLatest(actionTypes.BLOGS_REQUEST, loadDataBlogs),
    takeLatest(actionTypes.SINGLE_BLOG_REQUEST, loadDataBlog),
    takeLatest(actionTypes.SINGLE_PROJECT_REQUEST, loadDataProject)
  ]);
}

export default rootSaga;
