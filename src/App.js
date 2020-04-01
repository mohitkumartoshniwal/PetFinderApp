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
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "adopt me"),
  //     React.createElement(Pet, {
  //       name: "tom",
  //       animal: "cat",
  //     }),
  //     React.createElement(Pet, {
  //       name: "jerry",
  //       animal: "mouse",
  //     }),
  //   ]);

  //   return (
  //     <div>
  //       <h1 id="siefn">adopt me</h1>
  //       <Pet name="tom" animal="cat" />
  //       <Pet name="jerry" animal="mouse" />
  //     </div>
  //   );

  //React.StrictMode>//for additional warnings in deve env
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">adopt me</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

//render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
