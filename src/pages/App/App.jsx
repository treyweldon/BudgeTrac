import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CurrentMonthPage from '../CurrentMonthPage/CurrentMonthPage';
import NewMonthPage from '../NewMonthPage/NewMonthPage';
import BudgetHistoryPage from '../BudgetHistoryPage/BudgetHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

// const monthMap = {
//   '01': 'January',
//   '02': 'February',
//   '03': 'March',
//   '04': 'April',
//   '05': 'May',
//   '06': 'June',
//   '07': 'July',
//   '08': 'August',
//   '09': 'September',
//   '10': 'October',
//   '11': 'November',
//   '12': 'December'
// };

export default function App() {
  const [user, setUser] = useState(getUser());

//   const [date, setDate] = useState({
//     month: '',
//     year: ''
// })
// const [error, setError] = useState('');

// function handleChange(evt) {
//     const value = evt.target.value;
//     const newYear = value.substring(0, 4);
//     const newMonth = value.substring(5, 7);

//     setDate({
//       year: newYear,
//       month: newMonth,
//       month: monthMap[newMonth]
//     });
//     setError('');
//   }
// async function handleSubmit(evt) {
// evt.preventDefault();}



  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/budget" element={<CurrentMonthPage />} />
              <Route path="/budget/new" element={<NewMonthPage 
                // date={date} 
                // setDate={setDate} 
                // handleChange={handleChange} 
                // handleSubmit={handleSubmit} 
                // monthMap={monthMap} 
                // error={error} 
                />} />
              <Route path="/budget/history" element={<BudgetHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
