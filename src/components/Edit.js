import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/users";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const Edit = ({currentId, setCurrentId}) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => currentId ? state.users.find((u) => u._id === currentId) : null);

    const [postData, setPostData] = useState({
        _id: "",
        name: "",
        surname: "",
        email: ""
    })

    useEffect(() => {
      if (user) setPostData(user)
    },[user])

    const handleSubmit = (e) => {
      if (currentId) {
        dispatch(updateUser(currentId, postData))
    }}

    return (
      <Form onSubmit={handleSubmit}>
          <FormGroup> 
              <Label>User ID</Label>
              <Input 
                name="_id" 
                type="text" 
                placeholder="Enter name" 
                value={postData._id}
                onChange={(e) => setPostData({...postData, _id: e.target.value})}
                />
              <Label>User Name</Label>
              <Input 
                name="name" 
                type="text" 
                placeholder="Enter name" 
                value={postData.name}
                onChange={(e) => setPostData({...postData, name: e.target.value})}
                />
              <Label>User Surname</Label>
              <Input 
                name="surname" 
                type="text" 
                placeholder="Enter surname"
                value={postData.surname} 
                onChange={(e) => setPostData({...postData, surname: e.target.value})}
                />
              <Label>User Email</Label>
              <Input 
                name="email" 
                type="teext" 
                placeholder="Enter email" 
                value={postData.email} 
                onChange={(e) => setPostData({...postData, email: e.target.value})}
                />
          </FormGroup>
          <Button type="submit">Submit</Button>
      </Form>
    )
}

export default Edit;
