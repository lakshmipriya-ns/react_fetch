import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import CardItem from "./components/CardItem";
import { Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { FaHome } from "react-icons/fa";

function App() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar data-testid="navbar" bg="primary" variant="dark" >
        <Container data-testid ="containerNav" className="w-100 p-3">
          <Navbar.Brand href="#"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link onClick={handleClick} active>
              <FaHome size={31} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {list.map((item) => (
            <CardItem
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
            ></CardItem>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
