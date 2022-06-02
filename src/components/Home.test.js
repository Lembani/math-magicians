import { render, screen } from '@testing-library/react';
import Home from './Home';

test('heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});
