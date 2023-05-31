import React from 'react';

class Fight extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1> FIGHT B/W UCHIHA vs UZUMAKI </h1>
                <h4>First Match =  {this.props.cap} vs {this.props.cap}</h4>
            </React.Fragment>
        )
    }
}
export default Fight