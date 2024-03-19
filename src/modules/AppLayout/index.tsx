import { Outlet } from "react-router-dom"
import AppNavbar from "../../components/AppNavbar";
import { Container } from "react-bootstrap";
import "./index.scss"


const AppLayout = () => {

    return <>
        <AppNavbar />
        <Container className="page-containers">
            <Outlet/>
        </Container>
    </>

}

export default AppLayout;