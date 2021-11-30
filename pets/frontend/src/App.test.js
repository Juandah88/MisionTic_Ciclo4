import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

var menuhamburguesa = document.getElementById('menuhamburguesa');
var nav = document.getElementById('nav');
menuhamburguesa.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
})

