import "./YearFilter.css";

function YearFilter(props) {
  const { filterYearHnadler, selected } = props;

  const yearHandler = (event) => {
    filterYearHnadler(event.target.value);
  };

  return (
    <div className="year_filter_container">
      <label className="filter_txt" htmlFor="filter">
        Filter by year
      </label>
      <br />
      <select value={selected} onChange={yearHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default YearFilter;
