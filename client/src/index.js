import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, ApplyMiddleware, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
