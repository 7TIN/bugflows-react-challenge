
// import { useState } from 'react';
import './App.css'

function App() {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');


  const handleOnSubmit = (e) =>{
    e.preventDefault();

    alert(`Successfully Logged in`);

  }
  return (
    <div className='card'>
      <h3>
        Login page
      </h3>
      <form className='form' onSubmit={handleOnSubmit}>
        <div className='inputs'>
          <label htmlFor="Email">Email</label>
          <input type='text' placeholder='example@gmail.com' required
          // onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className='inputs'>
          <label htmlFor="Password">Password</label>
          <input type='password' placeholder='password' required
          // onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default App
