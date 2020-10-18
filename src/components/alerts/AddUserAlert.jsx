import React, { useContext } from "react";
import { useInput } from "../../hooks/useInput";
import { addUserList } from "../../services/user.services";
import EntrieContext from "../contexts/EntrieContext";

const AddUserAlert = ({ active }) => {
    const {entrie} = useContext(EntrieContext)
  const [value, handleChange, reset] = useInput({
    userEmail: "",
  });

  const { userEmail } = value;

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserList(userEmail, entrie._id)
    reset();
    active();
  };
  return (
    <div className="addListAlert__screen">
      <div  onClick={() => active()} className="addListAlert__background"></div>
      <div className="addListAlert__container animate__zoomInUp animate__animated ">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userEmail}
            onChange={handleChange}
            autoComplete="off"
            name="userEmail"
            placeholder="user email"
            className="input__default"
          />
          <div className="addListAlert__buttonContainer">
            <button type="button" className="buttons__danger" onClick={() => active()}>
              cancel
            </button>
            <button className="buttons__success" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserAlert;
