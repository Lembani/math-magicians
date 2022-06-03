import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('Renders `Button` to the screen', () => {
  render(<Button />);
  const btnElement = screen.getByRole('button');
  expect(btnElement).toBeInTheDocument();
});

it('Should render `Button` correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
