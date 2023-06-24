import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Style from './Style.css'


class App extends React.Component {

  render() {
    return(
      <React.Fragment>
           <Navbar />
           <Header />
           <Style />
           <div className="calculator-grid"></div>
            <div className="output"></div>
            <div className="previous-operand">123,234 *</div>
              <div className="current-operand">123,234 </div>
              <div>
                <button className="span-two">AC</button>
                <button>DEL</button>
                <button >÷</button>
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button >*</button>
                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button >+</button>
                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button >-</button>
                <button >.</button>
                <button >0</button>
                <button className="span-two">=</button>
              </div>
      </React.Fragment>            
    )
  }
}
export default App;
