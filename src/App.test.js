import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('If app renders correctly', () => {
  test('App is in document', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const navElement = document.querySelector('.navbar');
    expect(navElement).toBeInTheDocument();
  });

  it('Renders to the screen', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
