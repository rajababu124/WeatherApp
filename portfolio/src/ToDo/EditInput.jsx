import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";

// setEdittedValue is a callback function here that is to pass the edited value (inputValue) from this component(child) to parent component
const TopInput = ({ _, setEdittedValue, editVal, setEditId }) => {
  const [inputValue, setInputValue] = useState(editVal);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (inputValue) {
      setEdittedValue(inputValue);
      setInputValue("");
      setEditId("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row  ">
          <form
            onSubmit={submitForm}
            className="d-flex justify-center items-center"
          >
            <div className="col-md-11 ">
              <input
                type="text"
                placeholder=" Edit Here.."
                value={inputValue}
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-2 mx-2">
              <button type="submit" className="btn rounded-full btn-secondary">
                <h4>
                  <BiSolidEdit />
                </h4>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TopInput;
