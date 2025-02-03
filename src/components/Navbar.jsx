import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import ModelForm from "./ModelForm";
function Navbar() {
  const [modal, setModal] = useState(0);
  const handleModal = () =>
  {
    setModal(!modal);
  }
  return (
    <section className="navigation">
      {modal && <ModelForm handleModal={handleModal}/> }
      <div className="container">
        <div>Logo</div>
        <div className="header">
          <li>Home</li>
          <Link to="/about">
            {" "}
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <li>Contact</li>
          <Link to="/hooks">
            <li>state</li>
          </Link>
        </div>
        <div>
          <button className="button" onClick={handleModal}>Login</button>
        </div>
      </div>
    </section>
  );
}
export default Navbar;
