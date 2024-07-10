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
        months.map((month, index) => {
          const totalExpenses = month.expenses?.reduce((total, expense) => total + expense.amount, 0) || 0;
          const totalIncome = month.income?.reduce((total, income) => total + income.amount, 0) || 0;

          return (
            <React.Fragment key={index + 1}>
              {index + 1}. <Link to={`/${month.month}/${month.year}`}>{month.month} {month.year}</Link>
              <br />

              <h2>Income</h2>
              <ul>
                {month.income && month.income.length > 0 ? (
                  month.income.map((income, incomeIndex) => (
                    <li key={incomeIndex}>
                      {income.category}: ${income.amount}
                    </li>
                  ))
                ) : (
                  <li>No income recorded</li>
                )}
                <li><strong>Total Income: ${totalIncome}</strong></li>
              </ul>
              <h2>Expenses</h2>
              <ul>
                {month.expenses && month.expenses.length > 0 ? (
                  month.expenses.map((expense, expenseIndex) => (
                    <li key={expenseIndex}>
                      {expense.category}: ${expense.amount}
                    </li>
                  ))
                ) : (
                  <li>No expenses recorded</li>
                )}
                <li><strong>Total Expenses: ${totalExpenses}</strong></li>
              </ul>

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


// import React from "react";
// import { useState, useEffect } from "react";
// import { displayAll } from "../../utilities/months-api";
// import { Link } from "react-router-dom";


// export default function BudgetHistoryPage() {
//   const [months, setMonths] = useState([]);

//   useEffect(() => {
//     async function getMonths() {
//       try {
//         const months = await displayAll();
//         setMonths(months);
//       } catch (error) {
//         console.log("Error fetching months:", error);
//       }
//     }
//     getMonths();
//   }, []);

//   return (
// <>
//   <h1>Budget History</h1>
//   {months.length > 0 ? (
//     months.map((month, index) => (
//       <React.Fragment key={index + 1}>
//         {index < months.length ? ( 
//           <>
//            {index + 1}. <Link to={`/${month.month}/${month.year}`}>{month.month} {month.year}</Link>
//             <br />          
//             <br />          
//           </>
//         ) : null}
//       </React.Fragment>
//     ))
//   ) : (
//     <p>none</p>
//   )}
// </>

//   );
// }