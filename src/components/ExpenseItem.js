import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { expensesItem } = props;
  const { title, amount, date } = expensesItem;

  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <li className="expense_item">
      <div className="date_container">
        <p className="date_month">{month}</p>
        <p className="date_year">{year}</p>
        <p className="date_day">{day}</p>
      </div>
      <div className="expense_item_description">
        <h1 className="title_container">{title}</h1>
        <div className="amount_item_price">{amount}</div>
      </div>
    </li>
  );
}

export default ExpenseItem;
