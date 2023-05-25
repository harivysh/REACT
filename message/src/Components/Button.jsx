import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        console.log("First const")
    }

    edetails = { "sal": 45000, status: "single" }
    render() {
        console.log("second render method")
        return <div>
            <pre>{JSON.stringify(this.edetails)}</pre>
            <hr />
            <h4> Details:{this.edetails.sal} </h4>
            <button>Test</button>
        </div>
    }
}

export default Button
