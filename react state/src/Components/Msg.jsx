import React from 'react';


class Msg extends React.Component {
     msg= "Get the hell out of here";

     replyHadler =( ) =>  {
        this.msg = "why would i go "
        this.forceUpdate ()         
     }

     dontreplyHandler = ( ) => {
        this.msg = "ok! i will go"
        this.forceUpdate ()
     }

    render() {
        return(
            <React.Fragment>
                <h2> Message :: {this.msg} </h2>
                <button onClick={this.replyHadler}> Reply</button>
                <button onClick={this.dontreplyHandler}> Don't Reply</button>

            </React.Fragment>
        )
    }
}
export default Msg;