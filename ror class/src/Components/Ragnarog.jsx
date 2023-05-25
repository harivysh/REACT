import React from 'react';

class Ragnarog extends React.Component {

    eFight = " jack the ripper VS Hercelus"
    eWinner = " Hercelus"
    ePara = "Somewhere around 2000 BC, Heracles was born as Alcides in Thebes, Greece. When bullies tried to rob Castor, Alcides told them to stop. He lost the fight and was beaten up along with Castor. As the bullies left them alone, Castor asked Alcides why he fought even though he was weak. Alcides replied that he fought them because they were wrong. This trend continued for a long time, including times of conflict and hunts, where Alcides stood in the vanguard and fought for the righteous."
    render() {
        return(
            <React.Fragment>
                <h4> Fight b/w ::{this.eFight} </h4>
                <h4> Winner is::{this.eWinner} </h4>
                <p> <h4>About the Fight--</h4>{this.ePara} </p>
            </React.Fragment>
        )
    }
}
export default Ragnarog