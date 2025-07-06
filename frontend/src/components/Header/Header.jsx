import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function Header({ isAuth }) {
  return (
    <div>
      <header >
        <div className="logo">E-Learning</div>
        <div className="link">
          <Link to={"/"}>Home</Link>
          <Link to={"/courses"}>Courses</Link>
          <Link to={"/about"}>About</Link>
          {isAuth ? (
            <Link to={"/account"}><div className="icon">
            <FaUserAlt /> 
          </div></Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </header>
    </div>
  );
}
