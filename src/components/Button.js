import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { val, handleChange, styleClass } = props;
  return (
    <button onClick={handleChange} className={styleClass} type="button">
      {val}
    </button>
  );
};

Button.propTypes = {
  val: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  styleClass: PropTypes.string.isRequired,
};

export default Button;
