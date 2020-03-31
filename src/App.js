//my coedd
// const Pet = props => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal)

//     )

// }

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me"),
    React.createElement(Pet, {
      name: "tom",
      animal: "cat",
    }),

    React.createElement(Pet, {
      name: "jerry",
      animal: "mouse",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
