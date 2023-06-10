
const parent = React.createElement("div", { id: "parent" },
               React.createElement("div", { id: "child" },
               React.createElement("h1", { id: "heading1" }, "I'm a h1 tag"))
);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);