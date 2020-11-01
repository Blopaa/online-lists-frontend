import React, { useContext } from "react";
import { useDataUser } from "../../helpers/UseDataUser";
import { useInput } from "../../hooks/useInput";
import { createNewList } from "../../services/lists.services";
import ListsContext from "../contexts/ListsContext";

const AddListAlert = ({ toggleModal }) => {
  const { setLists } = useContext(ListsContext);

  const [{name}, handleChange, reset] = useInput({
    name: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();

    createNewList({ name: name });
    setTimeout(() => {
      useDataUser(setLists);
    }, 100)
    
    reset();
    toggleModal();
  };
  return (
    <div className="addListAlert__screen">
      <div  onClick={toggleModal} className="addListAlert__background pointer"></div>
      <div className="addListAlert__container animate__zoomInUp animate__animated threeh fivew flex column jcenter">
        <form onSubmit={handleSubmit} className="ninew">
          <input
            type="text"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            name="name"
            placeholder="list name..."
            className="input__default ninew"
          />
          <div className="addListAlert__buttonContainer">
            <button 
              type="button" 
              className="buttons__danger pointer" 
              onClick ={toggleModal}
              >
              cancel
            </button>
            <button className="buttons__success pointer" type="submit">create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListAlert;
