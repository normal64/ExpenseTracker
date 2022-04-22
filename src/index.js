import { createRoot } from "react-dom/client";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const store = createStore(reducers, applyMiddleware(thunk));

// const  gradient = {background-image: "linear-gradient(to right, #2c3e50, #4ca1af)"};
root.render(
  <Provider store={store}  >
    <App  />
    </Provider>
);
