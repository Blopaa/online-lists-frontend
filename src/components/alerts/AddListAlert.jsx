import React, { useContext } from "react";
import { useDataUser } from "../../helpers/UseDataUser";
import { useInput } from "../../hooks/useInput";
import { GetDataUser } from "../../services/auth.services";
import { createNewList } from "../../services/lists.services";
import ListsContext from "../contexts/ListsContext";

const AddListAlert = ({ active }) => {
  const { setLists } = useContext(ListsContext);
  const [value, handleChange, reset] = useInput({
    name: "",
  });

  const { name } = value;

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewList({ name: name });
    useDataUser(setLists);
    reset();
    active();
  };
  return (
    <div className="addListAlert__screen">
      <div  onClick={() => active()} className="addListAlert__background"></div>
      <div className="addListAlert__container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            name="name"
            placeholder="list name..."
            className="input__default"
          />
          <div>
            <button type="button" onClick={() => active()}>
              cancel
            </button>
            <button type="submit">create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListAlert;