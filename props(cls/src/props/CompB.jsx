import React from 'react';

class CompB extends React.Component{

    render() {
        return(
            <React.Fragment>
               <h1>CompB</h1>
               <pre> {JSON.stringify(this.props)} </pre>
               <h4> Member{this.props.member} </h4>
            </React.Fragment>
        )
    }
}
export default CompB;