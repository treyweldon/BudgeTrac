import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { index } from "../../utilities/months-api"
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CurrentMonthPage from '../CurrentMonthPage/CurrentMonthPage';
import BudgetHistoryPage from '../BudgetHistoryPage/BudgetHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import MonthDetail from '../MonthDetail/MonthDetail';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [allMonths, setAllMonths] = useState([])

  useEffect(() => {
    async function getAllMonths() {
      try {
        const allMonths = await index();
        setAllMonths(allMonths)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMonths()
  }, [])


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/budget" element={<CurrentMonthPage user={user} setUser={setUser} />} />
              <Route path="/budget/history" element={<BudgetHistoryPage user={user} setUser={setUser} />} />
              <Route exact path='/:month/:year' element={<MonthDetail/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
