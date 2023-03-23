import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/userdetail");
  }
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container className="w-100 p-3 ">
          <Navbar.Brand href="#"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link
              style={{ fontSize: "27px" }}
              active
              onClick={handleClick}
            >
              <p>User</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h2 className="text-center mt-5">Welcome to Home page</h2>
    </div>
  );
}

export default Home;
