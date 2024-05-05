import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./Pages/Home.jsx";
import { AuthContextProvider } from "./context/authContext.js";
import Login from './Pages/login.jsx';
import Signup from './Pages/signup.jsx';
import Account from './Pages/acoount.jsx'
import Protectedroute from "./components/protectedroute.jsx";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/account" element={<Protectedroute><Account/></Protectedroute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
