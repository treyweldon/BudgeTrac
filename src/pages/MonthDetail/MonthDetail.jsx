import React from "react";
import { useParams } from "react-router-dom";

export default function MonthDetail({ months }) {
  const { id } = useParams(); 
  const month = months.find((month) => month._id === id);

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
  const expensesByCategory = sumByCategory(month.expenses || []);

  return (
    <>
      <h1>Month Detail</h1>
      <h2>Budget Status</h2>
      <span>{month.budgetStatus}</span>
      <h2>Income</h2>
      
        {Object.keys(incomeByCategory).length > 0 ? (
          Object.entries(incomeByCategory).map(([category, amount], index) => (
            <span key={index}>
              {category}: ${amount} - {((amount / month.totalIncome) * 100).toFixed(1)}% of total
              <br />
            </span>
          ))
        ) : (
          <span>No income recorded</span>
        )}
        <br />
        <span><strong>Total Income: ${month.totalIncome}</strong></span>
      
      <h2>Expenses</h2>
        {Object.keys(expensesByCategory).length > 0 ? (
          Object.entries(expensesByCategory).map(([category, amount], index) => (
            <span key={index}>
              {category}: ${amount} - {((amount / month.totalExpenses) * 100).toFixed(1)}% of total
              <br />
            </span>
          ))
        ) : (
          <span>No expenses recorded</span>
        )}
        <br />
        <span><strong>Total Expenses: ${month.totalExpenses}</strong></span>
    </>
  );
}