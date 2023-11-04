import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function updateHandler(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={updateHandler}>Submit</button>
    </div>
  );
}

export default Login;
