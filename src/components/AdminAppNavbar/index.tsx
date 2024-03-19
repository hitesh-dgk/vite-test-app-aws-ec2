import Container from 'react-bootstrap/Container';
import { Navbar, Image, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import "./index.scss"
import iExecLogo from '../../assets/iexec-logo.svg';

const AdminAppNavbar = () => {

  return <>
    <Navbar className="app-navbar">
      <Container>
        <NavLink className='navbar-brand' to="/admin">
          <div className='flex'>
            <Image src={iExecLogo} className='me-3' />
            People Plus Admin
          </div>
        </NavLink>
        <Nav className="me-auto">
          <NavLink className="app-link" to="categories">Categories</NavLink>
          <NavLink className="app-link" to="primary-surveys">Primary Surveys</NavLink>
        </Nav>
        <NavLink to="/">
          Main site
        </NavLink>
      </Container>
    </Navbar>
  </>
}

export default AdminAppNavbar