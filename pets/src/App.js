import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Inicio from './components/Inicio';
import Admin from './components/Admin';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                src={process.env.PUBLIC_URL + '/img/logo.png'}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/admin">Administrador</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>

  );


}

export default App;
