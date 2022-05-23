import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />,
  </Router>
  
  // <App login={"nicholasjamesbaker"}/>,
  // <App secret={true}/>,
  // React.createElement("h1", null, "Hello, World!"),
);


