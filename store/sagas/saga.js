import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import axios from "axios";

import {
  actionTypes,
  projectSuccess,
  blogSuccess,
  projectFailure,
  blogFailure
} from "../actions";

es6promise.polyfill();

function* loadDataProjects(action) {
  try {
    const data = yield axios.get(
      `http://localhost:3333/projects?page=${action.payload}`
    );
    // const data = yield res.json();
    yield put(projectSuccess(data.data));
  } catch (err) {
    yield put(projectFailure(err));
  }
}

function* loadDataBlogs(action) {
  try {
    const data = yield axios.get(
      `http://localhost:3333/posts?page=${action.payload}`
    );
    // const data = yield res.json();
    yield put(blogSuccess(data.data));
  } catch (err) {
    yield put(blogFailure(err));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.PROJECTS_REQUEST, loadDataProjects),
    takeLatest(actionTypes.BLOGS_REQUEST, loadDataBlogs)
  ]);
}

export default rootSaga;
