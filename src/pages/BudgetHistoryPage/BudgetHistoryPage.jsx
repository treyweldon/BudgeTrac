import { useState, useEffect } from "react";
import { displayAll } from "../../utilities/months-api";


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
      {months.map((month, index) => (
        <p key={index}>{month.month} {month.year}</p>
      ))}
    </>
  );
}