import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import CompA from './props drill/CompA';
import CompB from './props drill/CompB';
import CompC from './props drill/CompC';
import CompD from './props drill/CompD';

class App extends React.Component {

  render() {
    return(
      <div>
           <Navbar />
           <Header />
           <hr />
           <CompA />
           <hr />
           <CompB />
           <hr />
           <CompC />
           <hr />
           <CompD />   
      </div>
    )
  }
}
export default App;
