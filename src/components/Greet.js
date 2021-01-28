import React from 'react'

// Functional Component

/*function Greet() {
    return <h1>Hello! Welcome Here.</h1>
}*/

const Greet = (props) => {
    return(
        <div>
            <h1>Hello! Welcome {props.name}.</h1>
            {props.children}
        </div>
    )
}
export default Greet