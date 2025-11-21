import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Summary from "./pages/Summary.jsx";
import Reports from "./pages/Reports.jsx";
import NavBar from "./components/NavBar.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import ChartCard from "./components/ChartCard";
import { useEffect, useState } from "react";

function App() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/users-count")
      .then(res => res.json())
      .then(data => {
        setUserCount(data.count);
      })
      .catch(() => setUserCount(0));
  }, []);
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
                <Dashboard  userCount={userCount}/>
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

          {/* Default redirect */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
