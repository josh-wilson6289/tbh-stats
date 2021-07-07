import React from "react";

const Login = ({page}) => {
  return (
<div className="row justify-content-center">
  <div className="col-6">
<form>
  <div className="form-group">
    <label for="Username">Username</label>
    <input className="form-control" placeholder="Enter Username"></input>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
  );
};

export default Login;