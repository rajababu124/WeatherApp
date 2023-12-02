import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
// getInputList is a callback function here that is to pass the value (inputValue) from this component(child) to parent component 
const TopInput = ({getInputList}) => {
  const [inputValue, setInputValue] = useState("");


  const submitForm = (e) => {
    e.preventDefault();
    if(inputValue){
      getInputList(inputValue);
      setInputValue("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row  ">
          <form onSubmit={submitForm} className="d-flex justify-center items-center">
          <div className="col-md-11 ">
            <input
              type="text"
              placeholder=" What to do .."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="col-md-2 mx-2">
            <button  type="submit" className="btn rounded-full btn-secondary">
            <h4><FaPlus /></h4>  
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TopInput;
