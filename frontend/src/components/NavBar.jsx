import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext.jsx";
import { useContext } from "react";

export default function NavBar() {
    const { logout, isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if (location.pathname === "/login" || !isAuthenticated) return null;
     
    return (
        <nav 
        style={{
            padding: '10px',
            borderBottom: '1px solid #ccc',
            marginBottom: '20px',
            display: "flex",
            gap: "20px"
        }}
        aria-label="Main Navigation">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/summary">Summary</Link>
            <Link to="/reports">Reports</Link>
            <button onClick={logout} style={{ marginLeft: 'auto' }}>Logout</button>
        </nav>
    );
}