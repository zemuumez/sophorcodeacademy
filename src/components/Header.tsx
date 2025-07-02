import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Programs", path: "/programs" },
  { name: "Registration", path: "/registration" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-primary font-bold text-2xl"
        >
          {/* Replace with your logo image if available */}
          <span className="rounded bg-primary text-white px-2 py-1 mr-2">
            SCA
          </span>
          Sophor Code Academy
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-textSecondary hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/registration"
            className="ml-4 bg-primary text-white rounded-button px-5 py-2 font-semibold shadow-button hover:shadow-lg transition-all"
          >
            Register Now
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Toggle menu"
        >
          <span className="block w-7 h-1 bg-primary rounded"></span>
          <span className="block w-7 h-1 bg-primary rounded"></span>
          <span className="block w-7 h-1 bg-primary rounded"></span>
        </button>
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-card px-6 pb-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-textSecondary hover:text-primary"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/registration"
            className="bg-primary text-white rounded-button px-5 py-2 font-semibold shadow-button hover:shadow-lg transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
