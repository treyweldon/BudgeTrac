import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import displayAll from '../../utilities/months-api';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();
  }

  return (
    <nav>
      <Link to="/budget">Current Month</Link>
      &nbsp; | &nbsp;
      <Link to="/budget/history">Budget History</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}