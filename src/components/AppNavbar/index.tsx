import Container from 'react-bootstrap/Container';
import { Navbar, Image, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom"
// import "./index.scss"
import "./Header.scss"
import iExecLogo from '../../assets/iexec-logo.svg';
import { BoxArrowRight, PersonFill } from "react-bootstrap-icons";
import { useLoginLogout } from '../../hooks/useLoginLogout';

const AppNavbar = () => {

  const { logout } = useLoginLogout()
  const navigate = useNavigate()

  const createSurveyBtnClicked = () =>{
    navigate("/create-survey")
  }

  return <>
    <Navbar className='appnavbar'>
      <Container >

        <NavLink className='navbar-brand d-flex justify-content-center align-items-centers text-light' to="/">
          <Image src={iExecLogo} className='me-3' />
          <span style={{fontSize: "25px"}}>People Pulse</span>
        </NavLink>

        {/* <Button className='me-auto'>Create DashBoard</Button> */}
        <div className="d-flex justify-content-center align-items-center text-light">
          <Button className='primary-cta-btn me-3' onClick={() => createSurveyBtnClicked()}>+ Create a Servey</Button>
          <Button className='primary-cta-btn me-3'>D23342313421</Button>
          <Button className='logout-button' onClick={logout}>
              <BoxArrowRight className='text-light' style={{fontSize: "30px", marginLeft: "5px" }} />
          </Button>
          <Button className='profile-button'>
            <PersonFill className="profile-icon__image" />
          </Button>
          {/* <PersonCircle className="profile-icon__image" /> */}
        </div>

      </Container>
    </Navbar>


  </>
}

export default AppNavbar