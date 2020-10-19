import React, { useContext } from "react";
import Router from "next/router";
import ListsContext from "../contexts/ListsContext";

const Navbar = () => {
  const { lists } = useContext(ListsContext);

  const handleLogout = () => {
    document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    Router.replace("/signin");
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {lists.user && (
          <>
            <h3 className="navbar__username">{lists.user.username}</h3>
            <button className="navbar__logout" onClick={handleLogout}>
              logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;