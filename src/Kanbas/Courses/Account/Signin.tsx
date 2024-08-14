import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import * as client2 from "../Assignments/client"
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const signin = async () => {
  //   try {
  //     const currentUser = await client.signin(credentials);
  //     //const data = await client2.findAssignmentsForCourse("RS101");
  //     // if (data){
  //     //   console.log(data);
  //     // }
  //     if (currentUser) {
  //       dispatch(setCurrentUser(currentUser));
  //     } 
  //     navigate("/Kanbas/Account/Profile");
  //   } catch (err: any) {
  //     setError(err.response.data.message);
  //   }
  // };

  const signin = async () => {
    try {
      const currentUser = await client.signin(credentials);
      dispatch(setCurrentUser(currentUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  const handleSignup = () => {
    navigate("/Kanbas/Account/Signup");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input id="wd-username" onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        value={credentials.username} className="form-control mb-2" placeholder="username" />
      <input id="wd-password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value }) }
        value={credentials.password} className="form-control mb-2" placeholder="password" type="password" />
      <button id="wd-signin-btn" onClick={signin} className="btn btn-primary w-50 mb-3"> Sign in </button>
      <br/>

      <button id="wd-signup-btn" onClick={handleSignup} 
            className="btn btn-success w-50 mb-3"> 
        Sign up 
    </button>
    </div>
  );
}