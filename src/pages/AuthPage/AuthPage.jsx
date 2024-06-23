import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
  const [auth, setAuth] = useState(false);

  return (
    <main>
      {auth ? (
        <>
        <h1>Sign Up</h1>
      <SignUpForm setUser={setUser} />
        
        </>
      ) : (
        <>
        <h1>Log In</h1>
      <LoginForm setUser={setUser}/>
      
        </>
      )}
      <button onClick={() => setAuth(!auth)}>
        {auth ? "Returning User? Login" : "New User? Sign Up" }
      </button>
    </main>
  );
}