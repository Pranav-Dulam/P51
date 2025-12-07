import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Summary from "./pages/Summary.jsx";
import Reports from "./pages/Reports.jsx";
import NavBar from "./components/NavBar.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import ChartCard from "./components/ChartCard";
//import { useEffect, useState } from "react";
//import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";

function App() {
  //const [userCount, setUserCount] = useState(0);
  //const { token } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!token) return;
  //   import("axios").then(({ default: axios }) => {
  //     axios
  //       .get("http://137.184.40.86:3000/api/users-count", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json"
  //         }
  //       })
  //       .then(res => {
  //         setUserCount(res.data.count || 0);
  //       })
  //       .catch(err => {
  //         console.error("User count error:", err.response?.data || err.message);
  //         setUserCount(0);
  //       });
  //   });
  // }, [token]);
  return (
    <BrowserRouter>
      <NavBar />

      <div className="pt-24 px-6 pb-10">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/summary"
            element={
              <ProtectedRoute>
                <Summary />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />

          <Route path="/signup" element={<Signup />} />

          {/* Default redirect */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
