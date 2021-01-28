import React from 'react'

function FunctionClick() {
    function clickMe() {
        alert("Clicked")
    }
    return(
        <div>
            <p>Event Handling</p>
            <button onClick={clickMe}>Click function!</button>
        </div>
    )
}
export default FunctionClick