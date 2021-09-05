import React from 'react'
import './Login.css'

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = props

    return (
        <section className='login'>
            <div className='loginContainer'>
                <img className="login-icon" src="https://rendin.ee/_nuxt/img/rendin-logo.66b36f6.svg" alt="Rendin Logo" />
                <label>Username</label>
                <input type='text' autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin} className='button'>Sign in</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) 
                    : (
                        <>
                            <button onClick={handleSignup} className='button'>Sign up</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
