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

Priyanka.codes

</Navbar.Brand>

<Navbar.Toggle
aria-controls="basic-navbar-nav"
/>

<Navbar.Collapse
id="basic-navbar-nav"
>

<Nav className="ms-auto">

<Nav.Link
href="#about"
className="text-light"
>
About
</Nav.Link>

<Nav.Link
href="#skills"
className="text-light"
>
Skills
</Nav.Link>

<Nav.Link
href="#projects"
className="text-light"
>
Projects
</Nav.Link>

<Nav.Link
href="#contact"
className="text-light"
>
Contact
</Nav.Link>

</Nav>

</Navbar.Collapse>

</Container>

</Navbar>

)

}