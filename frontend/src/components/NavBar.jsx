import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../auth/AuthContext.jsx";
import { useContext } from "react";
import { useState } from "react";

export default function NavBar() {
    const { logout, token } = useContext(AuthContext);
    const location = useLocation();

    const [open, setOpen] = useState(false);

    if (location.pathname === "/login" || !token) return null;
     
    return (
        <>
        <nav
          style={{
            padding: '10px',
            borderBottom: '1px solid #ccc',
            marginBottom: '20px',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            zIndex: 1000,
            width: "100%",
            left: 0,
            right: 0,
            top: 0,
            background: "white",
            boxSizing: "border-box",
          }}
          aria-label="Main Navigation"
        >
          {/* Desktop Links */}
          <div className="desktop-menu" style={{ display: "flex", gap: "20px" }}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/summary">Summary</Link>
            <Link to="/reports">Reports</Link>
          </div>

          {/* Logout desktop */}
          <button onClick={logout} style={{ marginLeft: 'auto' }}>Logout</button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-hamburger"
            aria-label="Toggle mobile menu"
            style={{
              display: "none",
              fontSize: "24px",
              background: "none",
              border: "none",
              cursor: "pointer"
            }}
          >
            ☰
          </button>

          {/* Mobile Side Drawer */}
          <div
            className="mobile-drawer"
            style={{
              position: "fixed",
              top: "0",
              right: open ? "0" : "-250px",
              width: "250px",
              height: "100%",
              background: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              transition: "right 0.3s ease",
              zIndex: 2000,
            }}
          >
            <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
            <Link to="/summary" onClick={() => setOpen(false)}>Summary</Link>
            <Link to="/reports" onClick={() => setOpen(false)}>Reports</Link>
            <button onClick={() => { logout(); setOpen(false); }}>Logout</button>
          </div>

        </nav>
        <div style={{ height: "60px" }}></div>
        <style>{`
          @media (min-width: 769px) {
            .mobile-drawer {
              display: none !important;
              right: -300px !important;
              visibility: hidden !important;
              pointer-events: none !important;
            }
          }
          nav {
            width: 100% !important;
          }
        `}</style>
        </>
    );
}
