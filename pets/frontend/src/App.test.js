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

function irariba(pxPatantalla){
  window.addEventListener('scroll', () =>{
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);
    var botonarriba = document.getElementById('botonarriba');
    
    if(scroll > 300){
      botonarriba.style.right= 20 + "px";
    }else{
      botonarriba.style.right= -100 + "px";
    }
  })
}
irariba();
