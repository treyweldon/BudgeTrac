import React from "react";

export default function IncomeChart({ months, currentMonth, currentYear }) {
  const month = months.find(
    (m) => m.month === currentMonth 
    // && m.year === currentYear
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

  const sortedIncomeByCategory = Object.entries(incomeByCategory)
    .sort((a, b) => b[1] - a[1]);

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
          {sortedIncomeByCategory.length > 0 ? (
            sortedIncomeByCategory.map(([category, amount], index) => (
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
          <tr>
            <td><strong>Total</strong></td>
            <td colSpan="2"><strong>${month.totalIncome}</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>Income List</h2>
      {month.income && month.income.length > 0 ? (
        month.income.map((income, incomeIndex) => (
          <span key={incomeIndex}>
            {income.category}: ${income.amount}
            <br />
          </span>
        ))
      ) : (
        <span>No income recorded</span>
      )}
    </div>
  );
}
