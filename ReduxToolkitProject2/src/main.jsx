import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "normalize.css";
import "bulma/css/bulma.min.css";
import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
