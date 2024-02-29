import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useContext, useEffect } from "react";
import { StateContext } from "./context/Context";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const {state}=useContext(StateContext)
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(state.tasks))
  },[state.tasks])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

    </>
  )
}

export default App;
