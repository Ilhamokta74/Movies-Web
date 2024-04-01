import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>MOVIES APP</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">TRENDING</Nav.Link>
          <Nav.Link href="#superhero">SUPER HERO</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;