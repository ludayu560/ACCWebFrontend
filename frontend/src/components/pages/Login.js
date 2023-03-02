import React from 'react'
import './Login.css'
import { useRef, useState, useEffect } from 'react'

function Login() {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('')
        setPwd('')
        setSuccess(true);
    }

    return (

        <div className='App'>
                    <section className='loginSection'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
            </p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Login</button>
            </form>
            <p>
                Don't have an account yet?
                <span className="line">
                    {/*put link here with router*/}
                    <a href="#">Sign up</a>
                </span>
                <br />
                <span className="line">
                    {/*put link here with router*/}
                    <a href="#">Forgot Password?</a>
                </span>

            </p>
        </section>
        </div>
    )
}

export default Login