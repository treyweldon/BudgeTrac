import React from 'react';

export default function ExpensesChart({months, currentMonth, currentYear}) {
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
    
      const expensesByCategory = sumByCategory(month.expenses || []);
    
      const sortedExpensesByCategory = Object.entries(expensesByCategory)
        .sort((a, b) => b[1] - a[1]);
    
      return (
        <div>
          <h2>Expenses Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Percent of Total</th>
              </tr>
            </thead>
            <tbody>
              {sortedExpensesByCategory.length > 0 ? (
                sortedExpensesByCategory.map(([category, amount], index) => (
                  <tr key={index}>
                    <td>{category}</td>
                    <td>${amount}</td>
                    <td>
                      {((amount / month.totalExpenses) * 100).toFixed(1)}%
                    </td>
                  </tr>
                  
                ))
              ) : (
                <tr>
                  <td colSpan="3">No expenses recorded</td>
                </tr>
              )}
              <tr>
                <td><strong>Total</strong></td>
                <td colSpan="2"><strong>${month.totalExpenses}</strong></td>
              </tr>
            </tbody>
          </table>
    
          <h2>Expenses List</h2>
            {month.expenses && month.expenses.length > 0 ? (
              month.expenses.map((expenses, expensesIndex) => (
                <span key={expensesIndex}>
                  {expenses.category}: ${expenses.amount}
                  <br />
                </span>
              ))
            ) : (
              <span>No expenses recorded</span>
            )}
        </div>
      );
    }
