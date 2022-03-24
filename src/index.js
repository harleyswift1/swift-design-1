import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export var headerExpanded;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export function showExpanded() {
    document.getElementById("header-collapsed").style.display = "none";
    document.getElementById("header-expanded").style.display = "flex";
    headerExpanded = true;
    console.log("Header Expanded")
}


export function showCollapsed() {
    document.getElementById("header-collapsed").style.display = "flex";
    document.getElementById("header-expanded").style.display = "none";
    headerExpanded = false;
    console.log("Header Collapsed")
}