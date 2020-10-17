import React, { useEffect, useState } from "react";
import Router from 'next/router'

const Navbar = () => {
  const [name, setName] = useState();
  useEffect(() => {
    const guardado = localStorage.getItem("User");
    const user = JSON.parse(guardado);
    setName(user.user.username);
  }, []);

  const handleLogout = () => {
      document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
      Router.push('/signin')
  }
  return (
    <div className="navbar__container">
      <div>{name}</div>
      <div className="navbar__logout" onClick={handleLogout}>logout</div>
    </div>
  );
};

export default Navbar;
