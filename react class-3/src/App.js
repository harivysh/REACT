import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';

class App extends React.Component {

  render() {
    return(
      <div>
           <Navbar />
           <Header />
           <Main/>
      </div>
    )
  }
}
export default App;
