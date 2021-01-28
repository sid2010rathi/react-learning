import React from 'react'

// With JSX
export const Home = () => {
    return (
        <div className="dummy">
            <h1>This is Home.</h1>
        </div>
    )
}

//Without JSX
export const NewHome = () => {
    return React.createElement("div", {className: "dummy"}, React.createElement("h1", null, "This is New Home."))
}

//Note: class is reserved for component, so to provide CSS class name we have to use className property. 