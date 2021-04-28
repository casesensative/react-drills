import React from 'react';

function Login(props) {

  return (
    <div className="login">
      Username:<input type="text" name="userInput" onChange={e => props.inputHandlerFn(e.target.value, e.target.name)}/>
      Password:<input type="text" name="passInput" onChange={e => props.inputHandlerFn(e.target.value, e.target.name)}/>
      <button type="submit" onClick={() => props.showLoginFn()}>Login</button>
    </div>
  )
  
}

export default Login;
