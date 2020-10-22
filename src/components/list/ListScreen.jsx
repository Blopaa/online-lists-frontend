import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import Sidebar from "./Sidebar";
import AddListAlert from "../alerts/AddListAlert";
import ListsContext from "../contexts/ListsContext";
import { useDataUser } from "../../helpers/UseDataUser";
import Nothing from "../nothing/nothing";
import EntrieScreen from "./EntrieScreen";
import EntrieContext from "../contexts/EntrieContext";
import AddUserAlert from "../alerts/AddUserAlert";
import AlertsContext from "../contexts/AlertsContexts";
import AddProductAlert from "../alerts/AddProductAlert";

const ListScreen = () => {
  const {setActiveNewList, setActiveNewUser, activeNewList, activeNewUser, setActiveNewProduct, activeNewProduct} = useContext(AlertsContext)
  const { setLists } = useContext(ListsContext);
  const { entrie } = useContext(EntrieContext);
  useEffect(() => {
    if (!document.cookie) {
      Router.replace("/signin");
      return
    }else{
      useDataUser(setLists);
    }
  }, []);

  const handleActiveNewList = () => {
    setActiveNewList(!activeNewList);
  };
  const handleActiveNewUser = () => {
    setActiveNewUser(!activeNewUser);
  };

  const handleActiveNewProduct = () => {
    setActiveNewProduct(!activeNewProduct)
  }

  return (
    <div className="list__screen">
      {activeNewList && <AddListAlert toggleModal={handleActiveNewList} />}
      {activeNewUser && <AddUserAlert active={handleActiveNewUser}/>}
      {activeNewProduct && <AddProductAlert active={handleActiveNewProduct}/>}
      <Sidebar active={handleActiveNewList} />

      <main>{entrie.name ? <EntrieScreen active={handleActiveNewUser} active2={handleActiveNewProduct}/> : <Nothing />}</main>
    </div>
  );
};

export default ListScreen;
