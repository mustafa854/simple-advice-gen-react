import React from "react";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="#">
            Quote Generator
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
