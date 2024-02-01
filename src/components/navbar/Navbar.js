import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark bg-gradient">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-warning">MovieMaze</Link>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn bg-success text-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
