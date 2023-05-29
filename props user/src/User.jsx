import React from 'react'
import Emp from './employee/Emp'
class User extends React.Component {
    userData = {
        name: "Rahul",
        loc: "Wayanad"
    }
    render() {
        return (
            <div>
                <h1>User Component</h1>
                <hr />
                <Emp p1={"GM"} p2={'GN'} user={this.userData} />
            </div>
        )
    }
}

export default User