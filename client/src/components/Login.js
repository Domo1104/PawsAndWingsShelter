import { useState } from "react"

function Login({ setUserLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

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
                    const data = sessionStorage.setItem("user_data")
                    setUserLogin(data)
                })
            } else {
                res.json().then((json) => console.log(json.errors))
            }
        })
    }
  return (
    <div className="login-container">
        {error && <p>{errorMessage}</p>}
        <label className="username"></label>
    </div>
  );
}

export default Login;
