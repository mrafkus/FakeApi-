import "./App.css";
import { Footer, Login, Navbar, Products, Users } from "./components";
import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState(null);

  return <div className="App">
    <Navbar />
    {token ? <Users /> : <Login token={token} setToken={setToken}/>}
    <Footer />
  </div>;
}

export default App;
