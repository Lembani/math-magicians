import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Should be in document and render correctly on the screen', () => {
  test('Nav is in document', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const navElement = document.querySelector('.navbar');
    expect(navElement).toBeInTheDocument();
  });

  it('Renders to the screen', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
