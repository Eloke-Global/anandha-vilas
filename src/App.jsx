// Root Import of React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// View Imports
// import Landing from "./views/Landing";
// import Login from "./views/Login";
// import Signup from "./views/Signup";
// import Event from "./views/Event";

import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ComingSoon/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/menu" element={<Menu/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;