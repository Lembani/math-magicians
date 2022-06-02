import { render, screen } from '@testing-library/react';
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