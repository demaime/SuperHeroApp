import React from "react";

export function Login() {
  return (
    <div className="container">
      <div className="container-fluid d-flex justify-content-center">
        <img
          src="logoHome.png"
          alt=""
          style={{
            width: "12rem",
            height: "10rem",
            margin: "2rem",
          }}
        />
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="card text-center w-25">
          <div className="card-header">SuperHeroApp - WELCOME</div>
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <input
              className="m-2 text-center"
              placeholder="USER"
              type="text"
              id="user"
            />
            <input
              className="m-2 text-center"
              placeholder="PASSWORD"
              type="password"
              id="pass"
            />
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="card-footer text-muted fst-italic">
            Enter a valid username and password
          </div>
        </div>
      </div>
    </div>
  );
}
