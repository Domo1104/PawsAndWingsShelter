import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login({ setUserLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    function handleLogin() {
        fetch("/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((r) => {
                    sessionStorage.setItem("user_data", JSON.stringify((r)));
                    const data = sessionStorage.getItem("user_data")
                    setUserLogin(data)
                    navigate("/")
                })
            } else {
                res.json().then((json) => console.log(json.errors));
            }
        })
    }
  return (
    <div className="login-container">
        {error && <p>{errorMessage}</p>}
        <label htmlFor="username" className="username"> Username </label>
            <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        <label htmlFor="password" className="password"> Password </label>
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        <button className="login-button" onClick={handleLogin}> Login </button>
    </div>
  );
}

export default Login;
