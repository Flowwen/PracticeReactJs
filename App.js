import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return (
    <h1 id="heading" className="head">
      Namaste React using JSX 🚀
    </h1>
  );
};

//React functional Component.

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1 id="heading">Namaste React from a functional Component 🙏</h1>
  </div>
);

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

root.render(<HeadingComponent />);
