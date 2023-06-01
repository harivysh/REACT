import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import User from './user/User';


class App extends React.Component {

  render() {
    return(
      <div>
           <Navbar />
           <Header />
           <hr />
           <User />
           
           
           
           
           
      </div>
    )
  }
}
export default App;
