import React from "react";
import ReactDOM from "react-dom/client";

// Function version...
function getButtonText() {
  return "Submit Me!";
}

const App = () => {
  // const buttonText = "Click Me!";
  // JS Object version...
  // const buttonText = {text: 'Submit'};
  return (
    <div>
      <label htmlFor="name" className="label">
        enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {/* {buttonText} */}
        {/* JS Object version would require... */}
        {/* {getButtonText.text}  */}
        {/* Function version */}
        {getButtonText()}
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
ReactDOM.render(
  <App />,
  document.querySelector("#root") // references the div id in public/index.html
);
*/

/* The DEFAULT Content

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/
