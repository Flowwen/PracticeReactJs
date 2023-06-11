
const parent = React.createElement("div", { id: "parent" },
               [
                 React.createElement("div", { id: "child" },
                 [
                    React.createElement("h1", { id: "heading1" }, "I'm a h1 tag"),
                    React.createElement("h2", { id: "heading2" }, "I'm a h2 tag")
                 ])
               ],
               [
                React.createElement("div", { id: "child2" },
                [
                    React.createElement("h1", { id: "headings1" }, "I'm a h1 tag"),
                    React.createElement("h2", { id: "headings2" }, "I'm a h2 tag")
                ])
               ]
);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);