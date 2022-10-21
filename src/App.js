import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './components/UserList'
import { Heading } from "./components/Heading"

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
      <Heading/>
      <UserList/>
    </div>
  );
}

export default App;
