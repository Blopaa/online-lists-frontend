import React, { useContext } from "react";
import { useInput } from "../../hooks/useInput";
import Link from "next/link";
import Router from "next/router";
import { SignUpUser } from "../../services/auth.services";
import LoadingContext from "../contexts/LoadingContext";
import ListsContext from "../contexts/ListsContext";
import { useDataUser } from "../../helpers/UseDataUser";

const SignUpScreen = () => {
  const { lists, setLists } = useContext(ListsContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const [value, handleChange, reset] = useInput({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    SignUpUser({ username, email, password });
    reset();
    setTimeout(() => {
      useDataUser(setLists);
    }, 1000);
    setTimeout(async() => {
      const data = await useDataUser(setLists);
      Router.replace(`/${data.user._id}/${data.user.username}`);
    }, 1500);
  };

  return (
    <div className="auth__screen ">
      <div className="auth__container fourw fiveh  animate__animated animate__fadeIn animate__faster">
        <div className="ninew">
          <h2 className="h2">Sign Up</h2>
          <form className="auth__form" onSubmit={handleSubmit}>
            <input
              className="input__default eightw"
              type="text"
              value={username}
              onChange={handleChange}
              name="username"
              autoComplete="off"
              placeholder="username"
            />
            <input
              className="input__default eightw"
              type="text"
              value={email}
              onChange={handleChange}
              name="email"
              autoComplete="off"
              placeholder="email"
            />
            <input
              className="input__default eightw"
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
              placeholder="password"
            />
            {!loading ? (
              <button className="buttons__auth-submit" type="submit">
                submit
              </button>
            ) : (
              <div className="loading"></div>
            )}
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
