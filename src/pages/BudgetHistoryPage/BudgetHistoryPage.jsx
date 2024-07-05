import React from "react";
import { useState, useEffect } from "react";
import { displayAll } from "../../utilities/months-api";
import { Link } from "react-router-dom";


export default function BudgetHistoryPage() {
  const [months, setMonths] = useState([]);

  useEffect(() => {
    async function getMonths() {
      try {
        const months = await displayAll();
        setMonths(months);
      } catch (error) {
        console.log("Error fetching months:", error);
      }
    }
    getMonths();
  }, []);

  return (
<>
  <h1>Budget History</h1>
  {months.length > 0 ? (
    months.map((month, index) => (
      <React.Fragment key={index + 1}>
        {index < months.length - 1 ? ( 
          <>
            <Link to={`/${month.month}/${month.year}`}>{month.month} {month.year}</Link>
          </>
        ) : null}
      </React.Fragment>
    ))
  ) : (
    <p>none</p>
  )}
</>

  );
}