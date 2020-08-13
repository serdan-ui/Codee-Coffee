import React from "react"
import { Link } from "gatsby"
import { Navbar ,Nav , NavDropdown ,Form ,FormControl , Button} from "react-bootstrap";
import Logo from "../images/marca-y-logo.png"


const Navegacion = () => {
  return (
    
<>
<Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="ml-5 mr-5" >
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Brand href="/" className="mr-0 ml-5">
<img

        alt="logo"
        src={Logo}
        width="300"
        height="350"
        className="d-inline-block  ml-5 "
      />{' '}

</Navbar.Brand>
 <Navbar.Collapse id="responsive-navbar-nav ">

<Nav className="ml-auto mr-5 mb-5 w-50 d-flex justify-content-between  " 
>
<Nav.Link href="#home" className="btn btn-primary btn-sm text-dark rounded-pill pl-4  pr-4">Inicio</Nav.Link>
      <Nav.Link href="#link" className="text-white w-25 shadow-h4">Nosotros</Nav.Link>
      <Nav.Link href="#link" className="text-white w-25 shadow-h4">Proyectos</Nav.Link>
      <Nav.Link href="#link" className="text-white w-25 shadow-h4">Servicios</Nav.Link>
      <Nav.Link href="#link" className="text-white w-25 shadow-h4">Contacto</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>


     </>
  )
}

export default Navegacion
