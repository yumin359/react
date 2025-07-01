import {
  Button,
  Container,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Spinner,
} from "react-bootstrap";
import { useState } from "react";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

function App18() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow(!show)}>모달 예제</Button>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton={true}>
          <Modal.Title>Lorem ipsum dolor sit amet.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          doloremque ducimus laborum magnam qui quos ratione saepe voluptatibus
          voluptatum! Aliquam aspernatur beatae consectetur harum in magni
          maxime mollitia odio optio?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Close
          </Button>
          <Button onClick={() => setShow(!show)}>Save</Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand>PROJECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">LINK</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
      <Pagination>
        <Pagination.Prev>
          <GrCaretPrevious />
        </Pagination.Prev>
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item active={true}>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Next>
          <GrCaretNext />
        </Pagination.Next>
      </Pagination>
      <hr />
      <Spinner />
      <Spinner animation="border" />
      <Spinner animation="grow" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
    </div>
    //
  );
}

export default App18;
