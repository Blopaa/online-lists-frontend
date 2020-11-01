import React, { useContext, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { addUserList } from "../../services/user.services";
import EntrieContext from "../contexts/EntrieContext";
import Swal from "sweetalert2";

const AddUserAlert = ({ active }) => {
  const [error, setError] = useState("");
  const { entrie } = useContext(EntrieContext);
  const [value, handleChange, reset] = useInput({
    userEmail: "",
  });

  const { userEmail } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === "") {
      setError({ status: 400, message: "You have to write a user Email" });
    }
    if (userEmail !== "") {
      const user = await addUserList(userEmail, entrie._id);
      if(typeof user === "string"){
        Swal.fire({
          icon: "success",
          title: "Added",
          text: "User Added",
        }).then((r) => reset());
        active();
      }
      if(typeof user !== "string"){
        setError(user)
      }
    }
    return;
  };
  return (
    <div className="addListAlert__screen">
      <div onClick={() => active()} className="addListAlert__background pointer"></div>
      <div className="addListAlert__container animate__zoomInUp animate__animated threeh fivew">
        {error.message && <div className="error" style={{width: "87%", height: "50px"}}>{error.message}</div>}
        <form onSubmit={handleSubmit} className="ninew flex jcenter column ">
          <input
            type="text"
            value={userEmail}
            onChange={handleChange}
            autoComplete="off"
            name="userEmail"
            placeholder="user email"
            className="input__default big ninew"
          />
          <div className="addListAlert__buttonContainer">
            <button
              type="button"
              className="buttons__danger"
              onClick={() => active()}
            >
              cancel
            </button>
            <button className="buttons__success" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserAlert;
