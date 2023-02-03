import React from "react";
import Card from "../UI/Card";
import classes from './usersList.module.css'

const UsersList = (props) => {

    if(props.users.length===0){
        return;
    }
    else{
        return (
            <Card className={classes.users}>
              <ul>
                {props.users.map((users) => (
                  <li key={users.id}>
                    {users.name}({users.age} years old)
                  </li>
                ))}
              </ul>
            </Card>
          );
    }
  
};

export default UsersList;
