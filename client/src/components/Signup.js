import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"

function Signup() {
    const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignup(e) {
    let userInfo = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address: address,
      city_town: cityTown,
      state: state,
      zipcode: zipcode,
      password: password,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((user) => navigate("/login"));
  }

  return (
    <div className="signup-container">
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="first_name"> First Name </label>
        <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last_name"> Last Name </label>
        <input 
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}    
        />
        <label htmlFor="email"> Email </label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone"> Phone </label>
        <input 
            className="signup-phone"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="address"> Address </label>
        <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="city_town"> City/Town </label>
        <input
            type="text"
            value={cityTown}
            onChange={(e) => setCityTown(e.target.value)}
        />
        <label htmlFor="state"> State </label>
        <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor="zipcode"> Zipcode </label>
        <input
            type="text"
        />
        <button onClick={handleSignup}>Submit</button>
    </div>
  );
}

export default Signup;