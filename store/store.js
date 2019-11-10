import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootReducer from "./../../reducers";
import DevTools from "./../../containers/Dev/DevTools";
import rootSaga from "./../../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware, logger),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept("./../../reducers", () => {
      store.replaceReducer(rootReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
