import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { useDataUser } from "../../helpers/UseDataUser";
import { deleteList, getList } from "../../services/lists.services";
import EntrieContext from "../contexts/EntrieContext";
import ListsContext from "../contexts/ListsContext";
import LoadingContext from "../contexts/LoadingContext";

const EntrieCard = ({ data, deleteable }) => {
  const {setLoading} = useContext(LoadingContext)
  const { setLists } = useContext(ListsContext);
  const { setEntrie, setFields } = useContext(EntrieContext);
  const handleClick = () => {
    setEntrie(data);
    setFields({})
    setTimeout(async () => {
      const newList = await getList(data._id)
      setFields(newList.fields)
    }, 100)
  };

  const handleDeleteList = () => {
    setLoading(true)
    deleteList(data._id);
    useDataUser(setLists);
    setEntrie({});
    setFields({});
    setTimeout(() => [
      setLoading(false)
    ], 200)
  };
  return (
    <>
      <div className="entrie__container animate__animated animate__bounceInDown pointer">
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
