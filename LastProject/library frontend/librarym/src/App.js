import RegistrationForm from "./components2/RegistrationForm";

import LoginForm from "./components2/LoginForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WelcomePage from "./components2/Welcome";
// admin
import AdminProTable from "./components2/AdminProTable";
import EditBook from "./components2/EditBook";
import UserProTable from "./components2/UserProTable";
import MyProfile from "./components2/MyProfile";




function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" element={<LoginForm/>}></Route>
      <Route exact path="/Welcome" element={<WelcomePage/>}></Route>

      <Route exact path="/AdminProTable" element={<AdminProTable/>}></Route>
      <Route exact path="/EditBook" element={<EditBook/>}></Route>

      <Route exact path="/register" element={<RegistrationForm/>}></Route>
      <Route exact path="/UserProTable" element={<UserProTable/>}></Route>

      <Route exact path="/MyProfile" element={<MyProfile/>}></Route>
      
      

      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
