import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import AddListAlert from "../alerts/AddListAlert";
import ListsContext from "../contexts/ListsContext";
import { useDataUser } from "../../helpers/UseDataUser";
import Nothing from "../nothing/nothing";

const ListScreen = () => {
  const { setLists } = useContext(ListsContext);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!document.cookie) {
      Router.replace("/signup");
    }
    useDataUser(setLists);
  }, []);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="list__screen">
      {active && <AddListAlert active={handleActive} />}
      <Sidebar active={handleActive} />

      <main>
      <Nothing />
      </main>
    </div>
  );
};

export default ListScreen;
