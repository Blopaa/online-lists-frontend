import React, { useContext, useEffect, useState } from "react";
import Router from 'next/router'
import ListsContext from "../contexts/ListsContext";

const Navbar = () => {
  const {lists} = useContext(ListsContext)

  const handleLogout = () => {
      document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
      Router.replace('/signin')
  }
  return (
    <div className="navbar__container">
      {lists.user && <div>{lists.user.username}</div>}
      <div className="navbar__logout" onClick={handleLogout}>logout</div>
    </div>
  );
};

export default Navbar;
