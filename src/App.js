import React from 'react';

import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}

export default App;
