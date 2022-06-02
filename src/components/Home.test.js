import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './Home';

test('heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});

test('First paragraph', () => {
    render(<Home />)
    const paragraphs = document.querySelector('.para-one');
    expect(paragraphs).toBeInTheDocument();
});

test('Second paragraph', () => {
    render(<Home />)
    const paragraphs = document.querySelector('.para-two');
    expect(paragraphs).toBeInTheDocument();
});

it('It renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot();
})
