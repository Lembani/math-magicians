import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <>
        <div className="main-calculator">
          <div className="cell result">0</div>
          <div className="cell">AC</div>
          <div className="cell">&#43;/&minus;</div>
          <div className="cell">&#37;</div>
          <div className="cell ops">&divide;</div>
          <div className="cell">7</div>
          <div className="cell">8</div>
          <div className="cell">9</div>
          <div className="cell ops">&times;</div>
          <div className="cell">4</div>
          <div className="cell">5</div>
          <div className="cell">6</div>
          <div className="cell ops">&minus;</div>
          <div className="cell">1</div>
          <div className="cell">2</div>
          <div className="cell">3</div>
          <div className="cell ops">&#43;</div>
          <div className="cell zero">0</div>
          <div className="cell">.</div>
          <div className="cell ops">&#61;</div>
        </div>
      </>
    );
  }
}

export default Calculator;
