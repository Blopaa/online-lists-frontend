import React, { useContext } from "react";
import { useInput } from "../../hooks/useInput";
import { addProduct, getList } from "../../services/lists.services";
import EntrieContext from "../contexts/EntrieContext";

const AddProductAlert = ({ active }) => {
  const {entrie, setFields, fields} = useContext(EntrieContext);
  const [value, handleChange, reset] = useInput({
    product: "",
    quantity: "",
    unit: "",
  });

  const { product, quantity, unit } = value;

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct(entrie._id, {product, quantity, doit: false, unit});
    reset();
    active();
    setTimeout(async() => {
      const newList = await getList(entrie._id)
      setFields(newList.fields)
      console.log(fields);
      console.log(newList);
    }, 100)
  };
  return (
    <div className="addListAlert__screen">
      <div onClick={() => active()} className="addListAlert__background"></div>
      <div className="addListAlert__container animate__zoomInUp animate__animated " style={{height: "30rem"}}>
        <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <input
            type="text"
            value={product}
            onChange={handleChange}
            autoComplete="off"
            name="product"
            placeholder="list name..."
            className="input__default"
          />
          <input
            type="text"
            value={quantity}
            onChange={handleChange}
            autoComplete="off"
            name="quantity"
            placeholder="list name..."
            className="input__default"
          />
          <input
            type="text"
            value={unit}
            onChange={handleChange}
            autoComplete="off"
            name="unit"
            placeholder="list name..."
            className="input__default"
          />
          <div className="addListAlert__buttonContainer">
            <button
              type="button"
              className="buttons__danger pointer"
              onClick={() => active()}
            >
              cancel
            </button>
            <button className="buttons__success pointer" type="submit">
              create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductAlert;
