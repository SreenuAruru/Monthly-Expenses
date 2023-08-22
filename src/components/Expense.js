import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import YearFilter from "./YearFilter";

import "./Expense.css";

function Expense(props) {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearHnadler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenseYear = expenses.filter((eachExpense) => {
    return eachExpense.date.getFullYear().toString() === filterYear;
  });

  const expnseLengthSatatus = filterExpenseYear.length === 0;

  return (
    <div className="expense_item_container">
      <YearFilter filterYearHnadler={filterYearHnadler} selected={filterYear} />
      {expnseLengthSatatus && <h2 className="no_data_message">No Data HERE</h2>}
      <ul className="expense_item_container">
        {filterExpenseYear.map((eachList) => (
          <ExpenseItem expensesItem={eachList} key={eachList.id} />
        ))}
      </ul>
    </div>
  );
}

export default Expense;
