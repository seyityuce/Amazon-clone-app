import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = e => {
        e.preventDefault()
    }
    const register = e => {
        e.preventDefault()
    }

  return (
    <div className='login'>
        <Link to="/" >
            <img className='login-logo' src='http://file.wikipediam.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' />
        </Link>

        <div className='login-container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button 
                    className='login-signIn-button' 
                    onClick={signIn} 
                    type="submit">
                    Sign In
                </button>
            </form>

            <p>
            By signing-in you agree to the FAKE AMAZON Conditions of Use & Sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button 
            className='login-register-button'
            onClick={register}>
                Create your Amazon Account
            </button>
        </div>
    </div>
  )
}

export default Login