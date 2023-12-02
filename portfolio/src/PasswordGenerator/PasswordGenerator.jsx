import React, { useState, useEffect } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%^&*(){}";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-9 mx-auto shadow rounded bg-dark p-5 text-warning ">
            <h3>Password Generator</h3>
            <div className="content">
              <input type="text" value={password} readOnly />
              <div className="d-flex justify-end mt-4 ">
                <input
                  type="range"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className=""
                  min={8}
                  max={80}
                />
                <h5>Length : {length}</h5>

                <input
                  type="checkbox"
                  onChange={() => setNumberAllowed((prev) => !prev)}
                  value={numberAllowed}
                />
                <label htmlFor="">Number Allowed</label>

                <input
                  type="checkbox"
                  onChange={() => setCharacterAllowed((prev) => !prev)}
                  value={characterAllowed}
                />
                <label htmlFor="">Character Allowed</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
// What should you do ? 
// Run a coaching center - 

// Chairs || rent || 8000/month 
// place -> Tilak nagar | dabri | uttam nagar | 7:30 to 8:30 
// Target - 6th 7th 8th 9th 10th class students

// 20X(54+54+40)
// 20x150 = 3000  7000



