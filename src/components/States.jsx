import React from "react";
import { useState } from "react";
import '../styles/states.css';
const States = () => {
    const [name, setName] = useState("elisa");
    const handlenames = () =>
    {
        setName("Alain");
    }

    const [num, setNum] = useState(0);
    const handleNum = () =>
    {
        setNum(num + 1);
    }
    return (
      <div className="code">
        <h1>{name}</h1>
        <button type="button" onClick={handlenames} className="button">
          change
        </button>

        <div>
                <div> {num}</div>
                <button type="button" onClick={handleNum} className="button">
                    change num
                </button>
            </div>
            
      </div>
    );
}
export default States;