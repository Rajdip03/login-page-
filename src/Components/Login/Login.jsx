import React, { useState } from 'react'
import './Login.css'
const Login = () => {

    const [action, setAction] = useState("sign up");

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Name' />
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder='Email' />
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">forgot password <span>click here</span></div>
            <div className="submit-container">
                <div className={action === "login" ? "submit gray" : "submit"} onClick={() => { setAction("sign up") }}>sign up</div>
                <div className={action === "sign up" ? "submit gray" : "submit"} onClick={() => { setAction("login") }}>login</div>
            </div>
        </div>


    )
}

export default Login
