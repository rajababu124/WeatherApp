import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../Redux/Slices/userSlice";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(createUser(user))
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-5 p-4 mt-5 text-center mx-auto shadow rounded">
            <h2 className=" mb-4">Register</h2>
            <form className="" onSubmit={submitForm}>
              <div className="my-2">
                <input
                  type="text"
                  placeholder=" Your name.."
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder=" Username/Email.."
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder=" Phone.."
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2">
                <input
                  type="text"
                  placeholder=" Password.."
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button type="submit" className=" mt-2 w-100 btn btn-warning">
                  Submit
                </button>
                <hr />
                <p>
                  Want to Login ? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
