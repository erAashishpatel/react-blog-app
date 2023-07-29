import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
// import { BrowserRouter as Router } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <Router> */}
//     <App />
//     {/* </Router> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );
