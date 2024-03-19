import { NavLink } from "react-router-dom"
import { Container } from "react-bootstrap"
import "./index.scss"
const AdminLanding = () => {

    return <>
        <Container>
            <div className="coming-soon">
                <div>Coming Soon</div>
                <div>
                    <div>Navigate to <NavLink to="categories" className="link">Categories</NavLink></div>
                    <div>Navigate to <NavLink to="primary-surveys" className="link">Primary Surveys</NavLink></div>
                </div>
            </div>
        </Container>
    </>

}

export default AdminLanding