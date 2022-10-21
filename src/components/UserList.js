import React, {useEffect} from "react";
import { ListItem } from "./ListItem";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../actions/users"

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])

  const users = useSelector((state) => state.users);

  // console.log(users)

  return (
      <div>
        <div style={{maxWidth: "30rem"}}>
              {users.map((user, index) => (
               <ListItem key={user._id} index={index+1} data={user} />
               ))}
        </div>
      </div>
  )
}

export default UserList;
