import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Message from './Components/Message';
import Button from './Components/Button';

class App extends React.Component {

  render() {
    return(
      <div>
           <Navbar />
           <Header />
           <hr />
           <Message />
           <hr />
           <Button />
      </div>
    )
  }
}
export default App;
