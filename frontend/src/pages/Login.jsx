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
  console.log("Attempting to login");
  try {
    const response = await fetch('https://wom-project-1.herokuapp.com/users/login', requestOptions)
    const token = await response.text()
    if(token != "E-mail or password incorrect"){
      const d = new Date()
      d.setTime(d.getTime() + 1000*60*60*2)
      
      document.cookie = "jwt="+token+";expires="+d.toUTCString();
      console.log("Login success");
      window.location = "./dashboard"
    } else {
      console.log("Incorrect password");
    }
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
          <button type="submit" class="btn">Login</button>
        </div>
      </form>
  );
}

export default Login;