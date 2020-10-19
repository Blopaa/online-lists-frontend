import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { useDataUser } from "../../helpers/UseDataUser";
import { deleteList } from "../../services/lists.services";
import EntrieContext from "../contexts/EntrieContext";
import ListsContext from "../contexts/ListsContext";

const EntrieCard = ({ data, deleteable }) => {
  const { setLists } = useContext(ListsContext);
  const { setEntrie } = useContext(EntrieContext);
  const handleClick = () => {
    setEntrie(data);
  };

  const handleDeleteList = () => {
    setEntrie({});
    deleteList(data._id);
    useDataUser(setLists);
  };
  return (
    <>
      <div className="entrie__container animate__animated animate__bounceInDown">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClick}
        >
          <div className="entrie__listname">{data.name}</div>
        </div>
        {deleteable && (
          <div className="entrie__trash" onClick={handleDeleteList}>
            <FaTrash />
          </div>
        )}
      </div>
    </>
  );
};

export default EntrieCard;
