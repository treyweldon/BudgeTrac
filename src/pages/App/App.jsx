import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import CurrentMonthPage from '../CurrentMonthPage/CurrentMonthPage';
// import NewMonthPage from '../NewMonthPage/NewMonthPage';
import BudgetHistoryPage from '../BudgetHistoryPage/BudgetHistoryPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/budget" element={<CurrentMonthPage user={user} setUser={setUser} />} />
              {/* <Route path="/budget/new" element={<NewMonthPage 
                user={user}
                />} /> */}
              <Route path="/budget/history" element={<BudgetHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
