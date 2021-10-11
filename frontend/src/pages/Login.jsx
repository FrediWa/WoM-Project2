import React from 'react'
import postReq from '../Utils'

const Field = React.forwardRef(({label, type}, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} />
    </div>
  )
})

const requestLogin = async (email, password, loginErr) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'email': email, password: password })
  }
 
  try {
    const response = await fetch('https://wom-project-1.herokuapp.com/users/login', requestOptions)
    const token = await response.text()
    if(token != "E-mail or password incorrect") document.cookie = "jwt="+token;
  } catch (error) {
    console.log(error);
  }
}

function Login() {
  const userRef = React.useRef();
  const passRef = React.useRef();
  const loginErr = React.useRef();
  const handleLogin = async (e) => {
    e.preventDefault()
    requestLogin(userRef.current.value, passRef.current.value, loginErr)
  }
  return (
    <form class="login-form" onSubmit={handleLogin}>
        <Field ref={userRef} label="Username:" type="text" />
        <Field ref={passRef} label="Password:" type="password" />
        <div class="button-wrapper">
          <button type="submit">Login</button>
        </div>
      </form>
  );
}

export default Login;