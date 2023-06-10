const heading = React.createElement("h1",
    {
        id: "heading",
    }, "Hello world from React!");

    console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading); 