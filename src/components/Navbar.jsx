// import React, { useState } from "react";
// import "../styles/navbar.css";
// import { Link } from "react-router-dom";
// import ModelForm from "./ModelForm";
// import UsestateHook from "./UsestateHook";
// function Navbar() {
//   const [modal, setModal] = useState(0);

//   const handleLoginForm = () =>
//   {
//     setModal(!modal)
//   }

//   return (
//     <section className="navigation">
//       {modal && <UsestateHook handleLoginForm={handleLoginForm}/>}
      
//       <div className="container">
//         <div>Logo</div>
//         <div className="header">
//           <li>Home</li>
//           <Link to="/about">
//             {" "}
//             <li>About</li>
//           </Link>
//           <Link to="/services">
//             <li>Services</li>
//           </Link>
//           <li>Contact</li>
//           <Link to="/hooks">
//             <li>state</li>
//           </Link>
//           {/* <Link to="/hooks">
//             <li>Hoos</li>
//           </Link> */}
//         </div>
//         <div>
//           <button className="button" onClick={handleLoginForm}>
//             Login
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Navbar;


import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Navbar() {
  const [form, setForm] = useState(false);
  const handleForm = () =>
  {
    setForm(!form); 
  }

  

  return (
    <section className="navigation">
      {form && <LoginForm handleForm={handleForm}/>}

      <div className="container">
        <div>Logo</div>
        
        <div>
          <button className="button" onClick={handleForm}>
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
export default Navbar;

