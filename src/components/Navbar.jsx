import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function CustomNavbar(){

return(

<Navbar
expand="lg"
className="py-4"
>

<Container>

<Navbar.Brand
className="text-white fw-bold fs-3"
>

Priyanka.dev

</Navbar.Brand>

<Navbar.Toggle />

<Navbar.Collapse>

<Nav className="ms-auto">

<Nav.Link className="text-light">
About
</Nav.Link>

<Nav.Link className="text-light">
Skills
</Nav.Link>

<Nav.Link className="text-light">
Projects
</Nav.Link>

<Nav.Link className="text-light">
Contact
</Nav.Link>

</Nav>

</Navbar.Collapse>

</Container>

</Navbar>

)

}