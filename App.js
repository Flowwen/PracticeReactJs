import React from "react";
import ReactDOM from "react-dom/client";

const element = <h2>This a h2 element</h2>;

const FooterComponent = () => {
  return (
            <span>This a footer component 🦶</span>
         );
};

const title = (
  <div className="heading">
    <h1 id="heading" className="head">
      {element}
      Namaste React using JSX 🚀
    </h1>
    <FooterComponent />
  </div>
);

//React functional Component.

const HeadingComponent = () => (
  <>
    <div id="container1">
      <h1 id="heading">Namaste React from a functional Component 🙏</h1>
      <FooterComponent></FooterComponent>
    </div>

    <div id="container2">
      {" "}
      This is container2 👆
      <FooterComponent />
    </div>
  </>
);

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

root.render(<HeadingComponent />);
