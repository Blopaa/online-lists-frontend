import React, { useContext, useState } from "react";
import AddUserAlert from "../alerts/AddUserAlert";
import EntrieContext from "../contexts/EntrieContext";

const EntrieScreen = ({active}) => {
  const handleActiveNewUser = () => {
    setActiveNewUser(!activeNewUser);
  };
  const { entrie, setEntrie } = useContext(EntrieContext);

  return (
   <>
    <div className="entrie__screen">
      <div className="entrie__header"><div className="entrie__name">{entrie.name}</div><div className="entrie__addSomeone pointer" onClick={() => active()}>add someone</div></div>
      <div>
          tareitas
      </div>
    </div>
    {active && <AddUserAlert id={entrie._id}/>}
   </>
  );
};

export default EntrieScreen;
