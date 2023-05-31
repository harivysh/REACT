import React from 'react';
import Fight from './Fight';

class Team1 extends React.Component { 
     eCaptain = 'Madra';
     eVicecapt = 'obito';
     ePlayer1 ='itachi';
     ePlayer2 ='sauske';
    render(){
        return(
            <React.Fragment>
                <h1> UCHIHA CLAN </h1>
                <h4>CAPTAIN : {this.eCaptain} </h4>
                <h4>VICE CAPTAIN : {this.eVicecapt} </h4>
                <h4> PLAYER 1 : {this.ePlayer1} </h4>
                <h4> PLAYER 2: {this.ePlayer2} </h4>
                <Fight cap = {this.eCaptain} />
            </React.Fragment>
        )
       }
}
export default Team1