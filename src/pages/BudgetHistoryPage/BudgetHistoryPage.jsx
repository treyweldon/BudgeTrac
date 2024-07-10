import React from "react";
import { Link } from "react-router-dom";

export default function BudgetHistoryPage({months}) {

  return (
    <>
      <h1>Budget History</h1>
      {months.length > 0 ? (
        months.map((month, index) => {
        
          return (
            <React.Fragment key={index + 1}>
              {index + 1}. <Link to={`/${month._id}`}>{month.month} {month.year}</Link>
              <br />
              <br />
            </React.Fragment>
          );
        })
      ) : (
        <p>none</p>
      )}
    </>
  );
}