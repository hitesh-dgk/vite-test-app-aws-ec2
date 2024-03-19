import {  Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import AdminAppNavbar from "../../../components/AdminAppNavbar"


const AdminLayout = () => {
    return <>
        <AdminAppNavbar/>
        <Container className="page-container">
            <Outlet />
        </Container>
    </>

}

export default AdminLayout