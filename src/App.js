//my coedd
// const Pet = props => {
//     return React.createElement(
//         "div",
//         {},
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal)
        
//     )

// }
const Pet = ({name,animal})=> {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal)
        
    )

}
const App = () => {

    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "adopt me"),
            React.createElement(Pet, 
                { 
                    name: "tom", 
                    animal: "cat" 
                }),

                React.createElement(Pet, 
                    { 
                        name: "jerry", 
                        animal: "mouse" 
                    }),
        ]

    )
}

ReactDOM.render(
    React.createElement(App), document.getElementById("root")

)