import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { displayAll } from '../../utilities/months-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CurrentMonthPage from '../CurrentMonthPage/CurrentMonthPage';
import BudgetHistoryPage from '../BudgetHistoryPage/BudgetHistoryPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [months, setMonths] = useState();

  useEffect(() => {
    async function getAllMonths() {
      try {
        const months = await displayAll();
        setMonths(months);
      } catch (error) {
        console.log("Error fetching months:", error);
      }
    }
    getAllMonths();
  }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/budget" element={<CurrentMonthPage user={user} setUser={setUser} months={months} />} />
              <Route path="/budget/history" element={<BudgetHistoryPage user={user} setUser={setUser} months={months} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
