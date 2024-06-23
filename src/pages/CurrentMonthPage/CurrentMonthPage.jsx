import ExpensesForm from '../../components/ExpensesForm/ExpensesForm';
import IncomeForm from '../../components/IncomeForm/IncomeForm';


export default function CurrentMonthPage() {

    return (
      <>
        <h1>Current Month</h1>
        <ExpensesForm />
        <IncomeForm />
      </>
    );
  }