import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import ExpensesChart from '../../components/ExpensesChart/ExpensesChart';
import IncomeForm from '../../components/IncomeForm/IncomeForm';
import IncomeChart from '../../components/IncomeChart/IncomeChart';


export default function CurrentMonthPage() {

    return (
      <>
        <h1>Current Month</h1>
        <ExpensesChart />
        <IncomeChart />
        <ExpensesForm />
        <IncomeForm />
      </>
    );
  }