import React from 'react'

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
  console.info('Attempting to login')
  const regex = /.{36}.{126}.{45}/
  try {
    const response = await fetch('https://wom-project-1.herokuapp.com/users/login', requestOptions)
    const token = await response.text()
    if(token.match(regex)){
      const d = new Date()
      d.setTime(d.getTime() + 1000*60*60*2)
      
      document.cookie = 'jwt='+token+';expires='+d.toUTCString();
      console.info('Login successful');
      window.location = './dashboard'
    } else {
      console.error('Incorrect password');
    }
  } catch (error) {
    console.error(error);
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
    <form className='login-form' onSubmit={handleLogin}>
        <Field ref={userRef} label='Username:' type='text' />
        <Field ref={passRef} label='Password:' type='password' />
        <div className='button-wrapper'>
          <button type='submit' className='btn'>Login</button>
        </div>
      </form>
  );
}

export default Login;