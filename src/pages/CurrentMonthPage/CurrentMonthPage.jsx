import { React } from 'react'
import "./CurrentMonthPage.css"
import { useEffect } from 'react';
import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart';
import IncomeForm from '../../components/IncomeForm/IncomeForm';
import IncomeChart from '../../components/IncomeChart/IncomeChart';


export default function CurrentMonthPage({user, months}) {

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    async function checkAndCreateMonthInstance() {
      try {
        const createResponse = await fetch('/api/months/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ month: currentMonth, year: currentYear, user: user }),
        });
    
        if (createResponse.ok) {
          console.log('Month instance created successfully');
        } else {
          console.error('Failed to create month instance:', createResponse.status);
        }
      } catch (error) {
        console.error('Error while creating/checking month instance:', error);
      }
    }
  
    checkAndCreateMonthInstance();
  }, [currentMonth, currentYear, user]);

  // const month = months.find(
  //   (m) => m.month === currentMonth 
  //   // && m.year === currentYear
  // );

    return (
      <>
        <h1>{currentMonth} {currentYear}</h1>
        <div id="form-wrapper">
        <IncomeForm/>
        <ExpensesForm/>
        </div>
        {/* <h2>Budget Status</h2>
      <span>{month.budgetStatus}</span> */}
        <div id="chart-wrapper">
        <IncomeChart user={user} months={months} currentMonth={currentMonth} currentYear={currentYear} />
        <ExpensesChart user={user} months={months} currentMonth={currentMonth} currentYear={currentYear} />
        </div>
      </>
    );
  }