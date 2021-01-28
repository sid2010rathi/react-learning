import React, { Component } from 'react'

// With JSX
class ClassClick extends Component {

    clickMe() {
        alert("Clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click class!</button>
            </div>
        )
    }
}

export default ClassClick