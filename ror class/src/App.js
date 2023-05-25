import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import Ragnarog from './Components/Ragnarog';

class App extends React.Component {

  render() {
    return(
      <div>
           <Navbar />
           <Header />
           <hr />
           <Main/>
           <hr />
           <Ragnarog />
           <hr />
      </div>
    )
  }
}
export default App;
