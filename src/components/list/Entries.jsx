import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "../contexts/LoadingContext";
import EntrieCard from "./EntrieCard";

const Entries = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const [alllists, setLists] = useState({});
  useEffect(() => {
    setLoading(true);
    const saved = localStorage.getItem("User");
    const userData = JSON.parse(saved);
    const listsAsAuthor = userData.listsAsAuthor;
    const listsAsUser = userData.listsAsUser;
    setLists({ listsAsAuthor, listsAsUser });
    setTimeout(() => {
      console.log(alllists);
        setLoading(false)
    }, 1500)
  }, []);
  return (
    <>
      {!loading ? (
       <div>cargado</div>
      ) : (
        <div className="loading"></div>
      )}
    </>
  );
};

export default Entries;
