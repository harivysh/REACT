import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Team1 from './data/Team1';
import Team2 from './data/Team2';
import Fight from './data/Fight';


class App extends React.Component {

  render() {
    return(
      <div>
           <Navbar />
           <Header />
           <hr />
           <Team1 />
           <hr />
           <Team2 />
           <hr />
           <Fight />
           
      </div>
    )
  }
}
export default App;
