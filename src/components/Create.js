import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { createUser } from "../api";

const Create = () => {
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        name: "",
        surname: "",
        email: ""
    })

    const handleSubmit = (e) => {
        // console.log(postData)
        dispatch(createUser(postData))
    }

    return (
      <Form onSubmit={handleSubmit}>
          <FormGroup>
              <Label>User Name</Label>
              <Input 
                name="name" 
                type="text" 
                placeholder="Enter name" 
                value={postData.name} 
                onChange={(e) => setPostData({...postData, name: e.target.value})}/>
              <Label>User Surname</Label>
              <Input 
                name="surname" 
                type="text" 
                placeholder="Enter surname" 
                value={postData.surname} 
                onChange={(e) => setPostData({...postData, surname: e.target.value})}/>
              <Label>User Email</Label>
              <Input 
                name="email" 
                type="teext" 
                placeholder="Enter email" 
                value={postData.email} 
                onChange={(e) => setPostData({...postData, email: e.target.value})}/>
          </FormGroup>
          <Button type="submit">Submit</Button>
      </Form>
    )
}

export default Create;
