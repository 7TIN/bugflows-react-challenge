
import { useState } from 'react';
import './App.css'

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {}
    if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Invalid email address'
    }
    if (!/[A-Z]/.test(password)) {
      errs.password = 'Needs at least one uppercase letter'
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errs.password = (errs.password ? errs.password + ' and ' : '') + 'one special character'
    }
    return errs
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      alert('Successfully Logged in')

  }
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
          onChange={(e) => setEmail(e.target.value)}
          
          ></input>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className='inputs'>
          <label htmlFor="Password">Password</label>
          <input type='password' placeholder='password' required
          onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && <p className="error">{errors.password}</p>}
          
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default App
