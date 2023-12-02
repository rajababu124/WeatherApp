import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
       password : '',
       username : ''
    })
    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)
    }

      // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-5 p-4 mt-5 text-center mx-auto shadow rounded">
            <h2 className=" mb-4">Login</h2>
            <form  className="" onSubmit={submitForm} >
              <div className="my-2">
                <input
                  type="text"
                  placeholder=" Username.."
                  name='username'
                  value={FormData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className=" my-2">
                <input
                  type="text"
                  placeholder=" Password.."
                  name="password"
                  value={FormData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button type="submit" className=" mt-2 w-100 btn btn-warning">Submit</button>
                <hr />
       <p>Don't Have an Account ? <Link to="/register">Create Account</Link></p>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
