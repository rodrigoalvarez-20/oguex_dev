import { Navbar, Container, Nav, Offcanvas, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles.css"

const NavBar = () => {

    const [darkBg, setDarkBg] = useState(false)

    const changeBackground = () => {        
        setDarkBg(window.scrollY >= 66 )
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })


    return (
        <Navbar fixed="top" expand="lg" className={`mb-3 ${darkBg ? 'dark-bg': 'no-bg'}`}>
            <Container className="nav-container">
                <Navbar.Brand href="/">
                    <img
                        alt="Oguex Logo"
                        src="logo-bl.png"
                        width="120"
                        style={{ maxHeight: "60px" }}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-lg"
                    aria-labelledby="offcanvasNavbarLabel-expand-lg"
                    placement="end"
                >
                    <Offcanvas.Header closeButton className="navbar-header" />
                    <Offcanvas.Body className="navbar-body">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link to="/" className="navbar-link">Nosotros</Link>

                            <NavDropdown title="Productos" className="navbar-link">
                                <NavDropdown.Item href="#" className="navbar-drop-link">Transformadores</NavDropdown.Item>
                            </NavDropdown>
                            
                            <NavDropdown title="Servicios" className="navbar-link">
                                <NavDropdown.Item href="#" className="navbar-drop-link">Instalaciones Eléctricas</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="navbar-drop-link">Instalaciones Especiales</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Gestión Energética" className="navbar-link">
                                <NavDropdown.Item href="#" className="navbar-drop-link">Codigo de red</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="navbar-drop-link">Cambio de tarifa</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="navbar-drop-link">Factor de potencia</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="navbar-drop-link">Termografía</NavDropdown.Item>
                            </NavDropdown>

                            <Link to="/" className="navbar-link">Proyectos</Link>
                            <Link to="/" className="navbar-link">Contactos</Link>
                            
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar;