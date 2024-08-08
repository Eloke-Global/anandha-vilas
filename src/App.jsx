// Root Import of React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// View Imports
// import Landing from "./views/Landing";
// import Login from "./views/Login";
// import Signup from "./views/Signup";
// import Event from "./views/Event";

import ComingSoon from "./pages/ComingSoon";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ComingSoon/>}/>
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/event" element={<Event/>}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;