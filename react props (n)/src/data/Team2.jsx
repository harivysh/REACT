import React from 'react';
import Fight from './Fight';

class Team2 extends React.Component {
    eCaptain = 'Hashirama';
     eVicecapt = 'Tobirama';
     ePlayer1 ='Minato';
     ePlayer2 ='Naruto';

    render() {
        return(
            <React.Fragment>
                <h1> UZUMAKI CLAN</h1>
                <h4>CAPTAIN : {this.eCaptain} </h4>
                <h4>VICE CAPTAIN : {this.eVicecapt} </h4>
                <h4> PLAYER 1 : {this.ePlayer1} </h4>
                <h4> PLAYER 2: {this.ePlayer2} </h4>
                <Fight cap= {this.eCaptain}  />
            </React.Fragment>
        )
    }
}
export default Team2