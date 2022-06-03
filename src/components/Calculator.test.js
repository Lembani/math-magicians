import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('Should enable user interaction', () => {
  test('Simulate if input is a number', () => {
    render(<Calculator />);
    const numb = screen.getByText('3');
    const output = screen.getByRole('button', { name: numb.textContent });
    fireEvent.click(numb);
    expect(output.textContent).toBe('3');
  });

  test('Simulate an operation', () => {
    render(<Calculator />);
    const addSymbol = screen.getByText('+');
    const output = screen.getByRole('button', { name: addSymbol.textContent });
    fireEvent.click(addSymbol);
    expect(output.textContent).toBe('+');
  });

  test('Simulate right answer', () => {
    render(<Calculator />);
    const num1 = screen.getByText('5');
    const num2 = screen.getByText('2');
    const operator = screen.getByText('-');
    const equalSign = screen.getByText('=');
    const answer = screen.getByRole('cell', { name: '0' });
    fireEvent.click(num1);
    fireEvent.click(operator);
    fireEvent.click(num2);
    fireEvent.click(equalSign);
    expect(answer.textContent.trim()).toBe('3');
  });
});
