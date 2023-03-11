import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'
import "./Auth.css"
const Auth = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
e.preventDefault();
dispatch(authActions.login())
  }
  return (
<div className='container'>
  <h3>Login</h3>
  <form onSubmit={handleSubmit}>
    <label htmlFor='id'>ID</label>
    <input type="text" name="id" id="id"/>
    <label htmlFor='password'>Password</label>
    <input type="password" name='password' id='password'/>
    <button type='submit' className='btn'>Login</button>
  </form>
</div>
  )
}

export default Auth 
