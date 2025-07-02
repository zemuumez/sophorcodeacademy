import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-200 mt-12">
    <div className="max-w-content mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-textSecondary">
      {/* Links */}
      <div>
        <h4 className="font-bold text-textPrimary mb-3">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/programs" className="hover:text-primary">
              Programs
            </Link>
          </li>
          <li>
            <Link to="/registration" className="hover:text-primary">
              Registration
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Social Icons */}
      <div>
        <h4 className="font-bold text-textPrimary mb-3">Follow Us</h4>
        <div className="flex gap-4">
          {/* Replace # with actual links and add SVGs for icons */}
          <a href="#" aria-label="Facebook" className="hover:text-primary">
            <svg width="24" height="24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary">
            <svg width="24" height="24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </a>
          <a href="#" aria-label="Telegram" className="hover:text-primary">
            <svg width="24" height="24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </a>
        </div>
      </div>
      {/* Contact Info */}
      <div>
        <h4 className="font-bold text-textPrimary mb-3">Contact</h4>
        <p>
          Email:{" "}
          <a
            href="mailto:info@sophorcodeacademy.com"
            className="hover:text-primary"
          >
            info@sophorcodeacademy.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+251900000000" className="hover:text-primary">
            +251 900 000 000
          </a>
        </p>
        <p>Addis Ababa, Ethiopia</p>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 py-4">
      &copy; {new Date().getFullYear()} Sophor Code Academy. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
