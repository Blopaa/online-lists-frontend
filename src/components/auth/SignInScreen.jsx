import React, { useContext, useState } from "react";
import Link from "next/link";
import Router from "next/router";

import { SignInUser } from "../../services/auth.services";
import LoadingContext from "../contexts/LoadingContext";
import ListsContext from "../contexts/ListsContext";

import { useInput } from "../../hooks/useInput";
import { useDataUser } from "../../helpers/UseDataUser";

import {
  AiFillEye as ViewIcon,
  AiFillEyeInvisible as NotViewIcon,
} from "react-icons/ai";

const SignInScreen = () => {
  const { lists, setLists } = useContext(ListsContext);
  const { loading, setLoading } = useContext(LoadingContext);

  const [error, setError] = useState("");
  const [view, setView] = useState(false);

  const [value, handleChange, reset] = useInput({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const userSignToken = await SignInUser({ email, password });

    if (typeof userSignToken === "string") {
      setTimeout(async () => {
        const data = await useDataUser(setLists);
        Router.replace(`/${data.user._id}/${data.user.username}`);
      }, 400);
    }

    if (typeof userSignToken !== "string") {
      setTimeout(() => {
        setError(userSignToken);
        setLoading(false);
      }, 200);
    }
    return;
  };
  const handleViewPassword = () => setView(!view);

  return (
    <div className="auth__screen">
      <div className="auth__container fiveh fivew">
        <div className="ninew">
          <h2 className="h2">Sign In</h2>
          <form className="auth__form onehw flex jcenter" onSubmit={handleSubmit}>
            {error !== "" && (
              <div className="error animate__animated animate__bounce">
                {error?.message}
              </div>
            )}
            <input
              className="input__default ninew"
              type="text"
              value={email}
              onChange={handleChange}
              name="email"
              autoComplete="off"
              placeholder="email"
            />
              <input
                className="input__default ninew"
                type={view ? "text" : "password"}
                value={password}
                onChange={handleChange}
                name="password"
                autoComplete="off"
                placeholder="password"
              />
             <div className="auth__viewContainer">
             <span onClick={handleViewPassword} className="auth__view">
                {view ? <ViewIcon /> : <NotViewIcon />}
              </span>
             </div>

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
          you don't have an account? <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
