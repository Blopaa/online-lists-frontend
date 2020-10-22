import React, { useContext, useState } from "react";
import AddUserAlert from "../alerts/AddUserAlert";
import EntrieContext from "../contexts/EntrieContext";
import Products from "./Products";
import { IoMdAddCircle } from "react-icons/io";

const EntrieScreen = ({ active, active2 }) => {
  const { entrie, setEntrie } = useContext(EntrieContext);

  return (
    <>
      <div className="entrie__screen">
        <div className="entrie__header">
          <div className="entrie__name">{entrie.name}</div>
          <div className="entrie__addSomeone pointer twow" onClick={active}>
            add someone
          </div>
        </div>
        <div className="onehw flex column acenter">
          <div
            className="entrie__newEntrie pointer animate__animated animate__bounceInUp"
            onClick={active2}
          >
            <IoMdAddCircle style={{ fontSize: "30px" }} />
          </div>
          <Products />
        </div>
      </div>
    </>
  );
};

export default EntrieScreen;
