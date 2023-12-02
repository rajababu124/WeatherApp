import React, { useState } from "react";
import "./LetMeToss.css";
const App = () => {
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
        <div className="min-h-screen flex items-center justify-center">
      <div className="mt-5 pl-50 mx-auto">
        <div className="content shadow-xl ml-80 mr-30 p-5 p-5 text-center rounded">
          {result === 1 ? (
            <img src="./head-coin.jpg" alt="" className={`${flip ? 'coin' : ''}`} />
          ) : (
            <img src="./tail-coin.jpg" alt="" className={`${flip ? 'coin' : ''}`} />
          )}
          <button
            onClick={handleClick}
            className="mt-5 p-3 w-52 shadow bg-yellow-600  hover:bg-yellow-700 text-white font-bold rounded"
          >
            <h2>Toss</h2>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
