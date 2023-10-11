import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
