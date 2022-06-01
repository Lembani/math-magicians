import React from 'react';

import './Quote.css';

class Quote extends React.PureComponent {
  render() {
    return (
      <>
        <p className="quote">
          Mathematics is not about numbers, equations, computations or
          algorithms: it is about understanding. - William Paul Thurston
        </p>
      </>
    );
  }
}

export default Quote;
