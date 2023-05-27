import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import CompA from './props/CompA';
import CompB from './props/CompB';
/*import CompA from './PropEx/CompA';
import CompB from './PropEx/CompB'*/

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
      </div>
    )
  }
}
export default App;
