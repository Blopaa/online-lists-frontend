import React from "react";
import { useInput } from "../../hooks/useInput";
import Link from "next/link";
import { SignUpUser } from "../../services/auth.services";

const SignUpScreen = () => {
  const [value, handleChange, reset] = useInput({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = value;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    SignUpUser({username, email, password});
    reset();
  };

  return (
    <div className="auth__screen">
      <div className="auth__container">
        <div>
          <h2 className="h2">Sign Up</h2>
          <form className="auth__form" onSubmit={handleSubmit}>
            <input
              className="input__auth"
              type="text"
              value={username}
              onChange={handleChange}
              name="username"
              autoComplete="off"
              placeholder="username"
            />
            <input
              className="input__auth"
              type="text"
              value={email}
              onChange={handleChange}
              name="email"
              autoComplete="off"
              placeholder="email"
            />
            <input
              className="input__auth"
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
              placeholder="password"
            />
            <button className="buttons__auth-submit" type="submit">
              submit
            </button>
          </form>
          <hr />
        </div>
        <div className="auth__changeAuth">
          Are you already a user? <Link href="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
