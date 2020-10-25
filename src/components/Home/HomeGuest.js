import React, { useState, useEffect } from 'react';

function HomeGuest() {

  const [values, setValue] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleValueChange(e) {
    
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValue({ ...values, [name]: value });

  }

  function handlevalidationForm() {
    
    let returnData = {
      error : false,
      msg: ''
    }

    // Check username
    if (values.username.length < 4) {
      returnData = {
        error: true,
        msg: 'Username it nhat 4 ky tu'
      }

      return returnData;
    }

    const reEmail = /\S+@\S+\.\S+/;
    // Check email
    if (!reEmail.test(values.email)) {
      returnData = {
        error: true,
        msg: 'Email không đúng định dạng'
      }

      return returnData;
    }

    // Check password
    const rePassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!rePassword.test(values.password)) {
      returnData = {
        error: true,
        msg: 'Hãy nhập password tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt'
      }

      return returnData;
    }

    return returnData;
    
  }

  function handleSubmit(e) {
    
    e.preventDefault();
    
    // call validationForm
    const validation = handlevalidationForm();
    
    // Check validation returnData
    if (validation.error) {
      alert(validation.msg)
    }else{
      alert('Submit form success')
    }

  }

  return (
    <div className="container py-md-5">
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          <p className="lead text-muted">Are you sick of short tweets and impersonal “shared” posts that are reminiscent of the late 90’s email forwards? We believe getting back to actually writing is the key to enjoying the internet again.</p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input id="username-register"
                name="username"
                value={values.username}
                onChange={handleValueChange}
                className="form-control"
                type="text"
                placeholder="Pick a username"
                autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input id="email-register"
                name="email"
                value={values.email}
                onChange={handleValueChange}
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input id="password-register"
                name="password"
                value={values.password}
                onChange={handleValueChange}
                className="form-control"
                type="password"
                placeholder="Create a password" />
            </div>
            <button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              Sign up for ComplexApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeGuest;