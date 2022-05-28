import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  render() {
    const { val, handleChange, styleClass } = this.props;
    return (
      <button onClick={handleChange} className={styleClass} type="button">
        {val}
      </button>
    );
  }
}

Button.propTypes = {
  val: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  styleClass: PropTypes.string.isRequired,
};

export default Button;
