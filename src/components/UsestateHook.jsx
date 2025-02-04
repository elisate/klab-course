
import React from "react"
import { useState } from "react"
import '../styles/hook.css';
import { IoClose } from "react-icons/io5";
const UsestateHook = ({ handleLoginForm }) => {
 
  return (
    <div>
      

      <div className="content">
        <form className="formcontainer">
          <div className="head">
            <div>Login</div>
            <IoClose onClick={handleLoginForm} className="iconhead" />
          </div>
          <input type="text" placeholder="enter username" className="input" />
          <input type=" email" placeholder="enter email" className="input" />
          <button type="button" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default UsestateHook;