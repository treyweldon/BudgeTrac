import React from "react";

export default function IncomeChart({ months, currentMonth, currentYear }) {
  const month = months.find(
    (m) => m.month === currentMonth && m.year === currentYear
  );

  if (!month) {
    return <p>No details available for this month.</p>;
  }

  const sumByCategory = (items) => {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category] += item.amount;
      return acc;
    }, {});
  };

  const incomeByCategory = sumByCategory(month.income || []);

  return (
    <div>
      <h2>Income Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Percent of Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(incomeByCategory).length > 0 ? (
            Object.entries(incomeByCategory).map(([category, amount], index) => (
              <tr key={index}>
                <td>{category}</td>
                <td>${amount}</td>
                <td>
                  {((amount / month.totalIncome) * 100).toFixed(1)}%
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No income recorded</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Income Instances</h2>
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
      </ul>
    </div>
  );
}


// export default function IncomeChart({months, currentMonth, currentYear}) {

//     return (
//         <div>
//             <h2>Income Summary</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Amount</th>
//                         <th>Percent of Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* {incomeData.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.category}</td>
//                             <td>${item.amount}</td>
//                         </tr>
//                     ))} */}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
