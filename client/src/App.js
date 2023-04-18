import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Client } from "@petfinder/petfinder-js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import DogAdoption from "./components/DogAdoption";
import CatAdoption from "./components/CatAdoption";
import BirdAdoption from "./components/BirdAdoption";
import PetCare from "./components/PetCare";
import SheltersOrganizations from "./components/ShelterOrganizations";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AccountInfo from "./components/AccountInfo";

function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);
  const [userLogin, setUserLogin] = useState(null)
 

  useEffect(() => {
    //new Client does a fetch call to the petfinder API for authorization
    const client = new Client({
      apiKey: process.env.REACT_APP_API_KEY,
      secret: process.env.REACT_APP_SECRET_KEY,
    });
    const fetchAnimalData = async () => {
      //once authorized, you can do fetch call for animal information
      const dogData = await client.animal.search({ type: "Dog" });
      const catData = await client.animal.search({ type: "Cat" });
      const birdData = await client.animal.search({ type: "Bird" });

      setDogs(dogData.data.animals);
      setCats(catData.data.animals);
      setBirds(birdData.data.animals);
      console.log(dogData);
    };
    fetchAnimalData();
  }, []);

  function handleLogout() {
    fetch("/logout", {
        method: "DELETE",
    }).then(() => {
        sessionStorage.removeItem("user_data")
        setUserLogin(null)
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar handleLogout={ handleLogout } userLogin={ userLogin }/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogadoption" element={<DogAdoption />} />
          <Route path="/catadoption" element={<CatAdoption />} />
          <Route path="/birdadoption" element={<BirdAdoption />} />
          <Route path="/petcare" element={<PetCare />} />
          <Route path="/sheltersorganizations" element={<SheltersOrganizations />} />
          <Route path="/login"  element={userLogin !==null? <Navigate to = "/" />  : <Login setUserLogin = {setUserLogin} />} />
          <Route path="/signup" element={userLogin !==null? <Navigate to = "/" />  : <Signup setUserLogin = {setUserLogin} />} />
          <Route path="/accountinfo" element={userLogin !==null? <Navigate to = "/login" /> : <AccountInfo setUserLogin = {setUserLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
