import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.jsx";
import { useContext, useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const { logout, token } = useContext(AuthContext);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  if (location.pathname === "/login" || !token) return null;

  const isActive = (path) =>
    location.pathname === path ? "nav-link tron-link active" : "nav-link tron-link";

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar tron-navbar" aria-label="Main Navigation">
        <div className="navbar-inner tron-navbar-inner">

          {/* Branding */}
          <span className="navbar-brand tron-brand">P51</span>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="navbar-toggle tron-toggle"
            aria-controls="navbar-menu"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <span className="navbar-toggle-icon">☰</span>
          </button>

          {/* Menu */}
          <div
            id="navbar-menu"
            className={`navbar-menu tron-menu ${open ? "navbar-menu-open" : "navbar-menu-closed"}`}
          >
            <ul className="navbar-list">

              <li>
                <Link to="/dashboard" className={isActive("/dashboard")} onClick={() => setOpen(false)}>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/summary" className={isActive("/summary")} onClick={() => setOpen(false)}>
                  Summary
                </Link>
              </li>

              <li>
                <Link to="/reports" className={isActive("/reports")} onClick={() => setOpen(false)}>
                  Reports
                </Link>
              </li>

              <li>
                <button
                  onClick={() => { logout(); setOpen(false); }}
                  className="nav-logout tron-logout"
                >
                  Logout
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer below navbar */}
      <div className="navbar-spacer"></div>
    </>
  );
}
