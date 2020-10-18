import React, { useContext, useEffect, useState } from "react";
import ListsContext from "../contexts/ListsContext";
import LoadingContext from "../contexts/LoadingContext";
import EntrieCard from "./EntrieCard";

const Entries = () => {
  const {lists, setLists} = useContext(ListsContext)
  const { loading, setLoading } = useContext(LoadingContext);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <div>
      {!loading ? (
        <div className="entries__container">
          {lists && lists.listsAsAuthor &&
            lists.listsAsAuthor.map((m) => (
              <EntrieCard key={m._id} data={m} />
            ))}
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
};

export default Entries;
