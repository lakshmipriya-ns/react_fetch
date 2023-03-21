import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className="w-100 p-3 ">
          <Navbar.Brand href="#"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              style={{ fontSize: "27px" }}
              as={Link}
              to="/userdetail"
              active
            >
              User
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h2 className="text-center mt-5">Welcome to Home page</h2>
    </div>
  );
}

export default Home;
