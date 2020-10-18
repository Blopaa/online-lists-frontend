import React, { useContext} from "react";
import { useInput } from "../../hooks/useInput";
import Link from "next/link";
import Router from "next/router"
import { SignInUser } from "../../services/auth.services";
import LoadingContext from "../contexts/LoadingContext";
import ListsContext from "../contexts/ListsContext";
import { useDataUser } from "../../helpers/UseDataUser";

const SignInScreen = () => {
  const {lists, setLists} = useContext(ListsContext)
  const {loading, setLoading} = useContext(LoadingContext)
  const [value, handleChange, reset] = useInput({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    SignInUser({ email, password });
    setTimeout(() => {
      useDataUser(setLists)
    }, 1000)
    reset();
    setTimeout(() => {
      setLoading(false)
      Router.replace("/");
    },1200)
  };

  return (
    <div className="auth__screen">
      <div className="auth__container">
        <div>
          <h2 className="h2">Sign In</h2>
          <form className="auth__form" onSubmit={handleSubmit}>
            <input
              className="input__default"
              type="text"
              value={email}
              onChange={handleChange}
              name="email"
              autoComplete="off"
              placeholder="email"
            />
            <input
              className="input__default"
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
              placeholder="password"
            />
            {
              !loading ?
              <button className="buttons__auth-submit" type="submit">
              submit
            </button> :
            <div className="loading"></div>
            }
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
