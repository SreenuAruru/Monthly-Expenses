import React, { useState } from "react";

import Form from "./components/form";
import Expense from "./components/Expense";

import "./App.css";

const initialList = [];

function App() {
  const [submitData, setSubmitData] = useState(initialList);

  const userSubmitedDate = (userInputValue) => {
    setSubmitData((previous) => [...previous, userInputValue]);
  };

  return (
    <div className="bg_container">
      <Form userIntputSubmitedDate={userSubmitedDate} />
      <Expense expenses={submitData} />
    </div>
  );
}

export default App;
