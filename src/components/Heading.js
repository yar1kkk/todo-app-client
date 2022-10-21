import React, { useState } from "react";
import Create from "./Create";
import Modal from "../modal/Modal";
import {
  Button,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  Container,
} from "reactstrap";

export const Heading = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Navbar style={{ borderRadius: 5 }} color="dark" dark>
        <Container className="d-flex justify-content-between">
          <NavbarBrand style={{ fontSize: "25pt" }}>User List</NavbarBrand>
          <Nav className="m-3">
            <NavItem>
              <Button color="primary" onClick={() => setModalActive(true)}>
                Add user
              </Button>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Modal active={modalActive} setActive={setModalActive}>
        <Create />
      </Modal>
    </>
  );
};
