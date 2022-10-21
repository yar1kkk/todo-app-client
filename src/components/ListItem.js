import React, {useState} from "react";
import Modal from "../modal/Modal";
import Edit from "./Edit";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/users";
import {
    ListGroupItem,
    ListGroup,
    Button
} from 'reactstrap'

export const ListItem = ({index, data}) => {
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  // console.log(users)

  const deleteHandler = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <div>
      <ListGroup className="mt-2">
        <ListGroupItem className="d-flex justify-content-between">
          <div>
            <strong className="mt-2 h2 text-primary">User {index}</strong>
            <h6 className="mt-2">ID is {data._id}</h6>
            <h6>Name is {data.name}</h6>
            <h6>Surname is {data.surname}</h6>
            <h6>Email is {data.email}</h6>
          </div>
          <div className="ml-auto">
            <Button className="btn-warning m-1" onClick={() => {setModalActive(true); setCurrentId(data._id)}}>Edit</Button>
            <Button color="danger" type="button" onClick={() => deleteHandler(data._id)}>Delete</Button>
          </div>
        </ListGroupItem>
      </ListGroup>
      <>
        <Modal active={modalActive} setActive={setModalActive}>
          <Edit currentId={currentId} setCurrentId={setCurrentId}/>
        </Modal>
      </>
    </div>
  )
};
        