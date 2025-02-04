import React from "react";
import '../styles/login.css';
import { MdClose } from "react-icons/md";
const LoginForm = ({ handleForm }) => {
  return (
      <div className="container-1">
          
          <form className="form">
            <MdClose onClick={handleForm}/>  
        <input type="text" placeholder="enter name" required />
        <input type="text" placeholder="enter name" required />
        <button type="login" className="btt">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;