import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      {" "}
      <div>Navbar</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <Link to="/">
              <button>login</button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
