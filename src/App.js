import React, {useState} from "react";
import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";

function App() {

  const [userList,setUserList]=useState([]);

  const addUserData =(uName,uAge)=>{
    setUserList((prevList)=>{
      return[...prevList,{name:uName,age:uAge,id:Math.random().toString}];
    });

  }

  return (
    <div>
      <AddUsers addUserDataHandler={addUserData}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
