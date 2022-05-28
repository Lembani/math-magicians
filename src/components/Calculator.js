import React, { useState } from 'react';

import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleChange = (e) => {
    const oprObject = calculate(state, e.target.textContent);
    setState(oprObject);
  };

  const { total, operation, next } = state;
  const opr = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${opr || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${opr || ''}`;
  }

  return (
    <>
      <div className="main-calculator">
        <div className="cell result">{ result || 0 }</div>
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="AC" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="+/-" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="%" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell ops" val="÷" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="7" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="8" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="9" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell ops" val="x" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="4" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="5" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="6" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell ops" val="-" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="1" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="2" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="3" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell ops" val="+" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell zero" val="0" />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell" val="." />
        <Button handleChange={(e) => handleChange(e)} styleClass="cell ops" val="=" />
      </div>
    </>
  );
};

export default Calculator;
