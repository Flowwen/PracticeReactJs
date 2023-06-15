
import React from "react";
import ReactDOM  from "react-dom/client"; 

const jsxHeading = (<h1 id="heading" className="head">Namaste React </h1>)

const rootElem = document.getElementById("root");
const root = ReactDOM.createRoot(rootElem);

root.render(jsxHeading);