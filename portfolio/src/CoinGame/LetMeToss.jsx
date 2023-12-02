import React, { useState } from "react";
import "./LetMeToss.css";
const LetMeToss = () => {
  const [result, setResult] = useState(Math.floor(Math.random() * 2 + 1));
  const [flip, setFlip] = useState(false)
  const handleClick = () => {
         setFlip(true)
        setTimeout(()=> {
            setFlip(false)
        }, 400) 
        setResult(Math.floor(Math.random() * 2 + 1))
  }
  return (
    <>
      <div className="container  mt-5">
        <div className="row w-25">
          {result === 1 ? (
            <img src="./LetMeToss/head-coin.jpg" alt="" className={`${ flip ? 'coin' : '' }`}/>
          ) : (
            <img
              src="./LetMeToss/tail-coin.jpg"
              alt=""
              className={`${ flip ? 'coin' : '' }`}
            />
          )}
          <button
            onClick={handleClick}
            className="mt-5 p-3 w-100 shadow"
          >
            <h2>Flip</h2>
          </button>
        </div>
      </div>
    </>
  );
};

export default LetMeToss;
