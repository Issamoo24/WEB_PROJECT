import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <body className='log-body'>
        <div class="log-form-container">
          <form class="log-account-form">
              <h2>Create an account</h2>
              <p>To get started, you'll need to create an account.</p>
              <input type="email" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <p className='account'>Have an account?</p>
              <button type="submit"> <a href='/AdminSB'>Login</a> </button>
          </form>
        </div>
      </body>
    </div>
  )
}

export default Login
