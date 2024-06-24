import "./CurrentMonthPage.css"
import { useEffect } from 'react';
import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart';
import IncomeForm from '../../components/IncomeForm/IncomeForm';
import IncomeChart from '../../components/IncomeChart/IncomeChart';


export default function CurrentMonthPage({user}) {

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    async function checkAndCreateMonthInstance() {
      try {
        const response = await fetch('/api/months/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ month: currentMonth, year: currentYear, user: user }),
        });
  
        if (response.ok) {
          console.log('Month instance created/checked successfully');
        } else {
          console.error('Failed to create/check month instance:', response.status);
        }
      } catch (error) {
        console.error('Error while creating/checking month instance:', error);
      }
    }
  
    checkAndCreateMonthInstance();
  }, [currentMonth, currentYear, user]);

    return (
      <>
        <h1>{currentMonth} {currentYear}</h1>
        <div id="chart-wrapper">
        <ExpensesChart />
        <IncomeChart />
        </div>
        <div id="form-wrapper">
        <ExpensesForm />
        <IncomeForm />
        </div>
      </>
    );
  }