import React, { useState } from 'react';


function Login ({ handleLoginUser }){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-div">
        <form onSubmit={handleLoginUser} class="ui form">
            <h1> Login </h1>
            {/* <div class="field"> */}
            <div class="ui input focus">
                {/* <label>Email</label> */}
                <input 
                    type="text" 
                    name="email" 
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <br></br>
            <div class="ui input focus">
                {/* <label>password</label> */}
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br></br>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden"/>
                        <label>I am a Human</label>
                     </div>
                </div>
            <button class="ui button" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Login;