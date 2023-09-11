import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import DriverSignup from "../Driver/Signup/Signup";
import LoginPage from "../LoginPage/LoginPage";
import DriverLogin from "../Driver/Login/Login";
import RideDetails from "../RideDetails/RideDetails";
import ProfilePage from "../ProfilePage/ProfilePage";
import Home from "../Home/Home";
import About from "../About/About";
import RideHistory from "../RideHistory/RideHistory";
import userService from "../../utils/userService";
import { getDriver } from "../../utils/driverService";

function App() {
  const [user, setUser] = useState(userService.getUser());
  const [driver, setDriver] = useState(getDriver());

  function handleLogout() {
    userService.logout();
    setUser(null);
    setDriver(null);
  }

  return (
    <>
      {user || driver ? (
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/login/driver" element={<DriverLogin />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/driver" element={<DriverSignup />} /> */}
          <Route
            path="/"
            element={<Home user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/trip"
            element={<RideDetails user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/trip/history"
            element={<RideHistory user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/:name"
            element={<ProfilePage user={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/about"
            element={<About user={user} handleLogout={handleLogout} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser}/>} />
          <Route path="/login/driver" element={<DriverLogin setDriver={setDriver}/>} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup/driver" element={<DriverSignup />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
