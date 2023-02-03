import React from "react";
import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid Input", message: "Please enter valid  age" });
      return;
    }
    setEnteredUserName(" ");
    setEnteredAge(" ");
    props.addUserDataHandler(enteredUserName, enteredAge);
  };

  const onUserEnter = (event) => {
    setEnteredUserName(event.target.value);
  };

  const onUserAgeEntered = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler =()=>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onErrorHandled={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={onSubmit}>
          <label htmlFor="UserName">UserName</label>
          <input
            id="UserName"
            type="text"
            value={enteredUserName}
            onChange={onUserEnter}
          />
          <label htmlFor="Age">Age</label>
          <input
            id="Age"
            type="number"
            value={enteredAge}
            onChange={onUserAgeEntered}
          />
          <Button type={"submit"}>AddUser</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
