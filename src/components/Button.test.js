import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button to the screen', () => {
  render(<Button />);
  const btnElement = screen.getByRole('button');
  expect(btnElement).toBeInTheDocument();
});
