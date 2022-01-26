import { useNavigate } from 'react-router-dom';
//import { useForm } from "react-hook-form";
import React, { useState  } from "react";

 
const Loginpage = () => {
    ////////////////////////////////////////
    let navigate =useNavigate();

    const adminUser = {
      username: "admin",
      password: "password"
    };
    const [values, setValues] = useState({
      username: "",
      password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(validate(values));
    };
    
    const validate = (values) => {
      const error = {};
  
      if (
        values.username === adminUser.username &&
        values.password === adminUser.password
      ) {
        navigate("/Homepage", {
          state: { username: values.username /*password: password*/ },
        });
      }
  
      if (!values.username) {
        error.username = "Username is required";
      } else if (values.username !== adminUser.username) {
        error.username = "Username is Incorrect";
      }
  
      if (!values.password) {
        error.password = "Password is required";
      } else if (values.password !== adminUser.password) {
        error.password = "Password is Incorrect";
      }
      return error;
    };
    
    
    return (
      <div className="mainbackground">
        <div className="main">
          <h1 className="login">User Login</h1>
          <form 
            className="form1"
            onSubmit={handleSubmit}
          >
            <div>
              <div>
                <label className="label">User Name</label>
              </div>
              <input
                 className="userinput"
                 type="text"
                 placeholder="Type here"
                 name="username"
                 /////////////////////////////////////////
                 //value={userName} 
                 //onInput={(e) => setInput(e.target.value)} 
                 value={values.username}
                onChange={handleChange}
                 
              />
              <div>
              <p className='errors'>{errors.username}</p>
              </div>
            </div>

            <div>
              <div>
                <label className="label">Password</label>
              </div>
              <input
                className="userinput"
                type="password"
                placeholder="Type here"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <p className='errors'>{errors.password}</p>
            </div>

            <div>
              
              <button
                className="submit"
               
                value="Login"
                ///////////////////////////////////////////////
                //onClick={() => navigate("/Homepage/" + userName)} 
              >Log In</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Loginpage;