import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

test('paragraph', () => {
  render(<Quote />);
  const paragraph = document.querySelector('.quote');
  expect(paragraph).toBeInTheDocument();
});

it('It renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
  