import React from "react";
import "../styles/model.css";


function ModelForm() {
  return (
    <div className="overlay">
      <form className="model">
        
        <input type="text" placeholder="Enter your name" className="input" />
        <input type="email" placeholder="Enter your email" className="input" />
        <button type="button" className="button">
          Login
        </button>
      </form>
    </div>
  );
}

export default ModelForm;
