import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SetEvent from "./pages/SetEvent";
import HostEvent from "./pages/HostEvent";
import { AuthProvider } from "./context/AuthProvider";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="signin"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="signup"
              element={<Signup setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="host-event"
              element={<SetEvent setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="event-request"
              element={<HostEvent setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="privacy" element={<Privacy />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route
              path="term-and-conditions"
              element={<TermsAndConditions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
