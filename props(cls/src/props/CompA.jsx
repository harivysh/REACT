import React from 'react';
import CompB from './CompB';

class CompA extends React.Component{
    eId= "16"
    eName='Itachi'
    eMember='Atkatshi'
    eClan='Uchiha'

    render() {
        return(
            <React.Fragment>
              <h1> COMPONENT A</h1>
              <hr />
              <CompB Id={this.eId}  Name={this.eName} />
            </React.Fragment>
        )
    }
}
export default CompA;