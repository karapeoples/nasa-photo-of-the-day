import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Tomorrow', 'sans-serif', 'Josefin Sans', 'Shadows Into Light', 'cursive']
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
