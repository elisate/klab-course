import React from "react";
import '../styles/model.css';
import { IoMdClose } from "react-icons/io";
function ModelForm() {
  return (
    <div className="overlay">
      <form className="model">
        <div className="header">
          <div>Register</div>
          <div>
            <IoMdClose />
          </div>
        </div>
        <input type="text" placeholder="names" className="input" />
        <input type="email" placeholder="email" className="input" />
        <button type="button" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default ModelForm;
