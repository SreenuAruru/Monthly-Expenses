import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./form.css";

function Form(props) {
  const { userIntputSubmitedDate } = props;
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [toggle, setToggle] = useState(false);

  const userInputSubmitHandler = (event) => {
    event.preventDefault();
    const userInputValue = {
      id: uuidv4(),
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    userIntputSubmitedDate(userInputValue);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  const userInputHandler = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const cancelHandler = () => {
    setToggle(true);
  };
  // console.log(toggle);
  const newAddExpenseHandler = () => {
    setToggle(false);
  };

  return (
    <div className="form_bg_container">
      {toggle && (
        <button className="add_item_button" onClick={newAddExpenseHandler}>
          New Add Expense
        </button>
      )}
      {!toggle && (
        <form className="form_container" onSubmit={userInputSubmitHandler}>
          <label className="title_label">title</label>

          <input
            type="text"
            className="title_input"
            value={userInput.title}
            name="title"
            onChange={userInputHandler}
          />

          <label className="amount_label">amount</label>
          <input
            type="number"
            className="amount_input"
            name="amount"
            onChange={userInputHandler}
            value={userInput.amount}
          />
          <label className="date_label">date</label>
          <input
            type="date"
            className="date_input"
            onChange={userInputHandler}
            value={userInput.date}
            name="date"
            min="2020-01-01"
            max="2023-12-31"
          />
          <button className="add_item_button" onClick={cancelHandler}>
            Cancel
          </button>
          <button className="add_item_button" type="submit">
            Add Expense
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
