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
    addProduct(entrie._id, {product, quantity, unit});
    reset();
    active();
    setTimeout(async() => {
      const newList = await getList(entrie._id)
      setFields(newList.fields)
    }, 400)
  };
  return (
    <div className="addListAlert__screen">
      <div onClick={active} className="addListAlert__background pointer"></div>
      <div className="addListAlert__container animate__zoomInUp animate__animated fourh">
        <form onSubmit={handleSubmit} className="eightw flex column jcenter">
          <input
            type="text"
            value={product}
            onChange={handleChange}
            autoComplete="off"
            name="product"
            placeholder="product name..."
            className="input__default big"
          />
          <div className="spaceb">
          <input
            type="text"
            value={quantity}
            onChange={handleChange}
            autoComplete="off"
            name="quantity"
            placeholder="quantity..."
            className="input__default sixw"
          />
          <input
            type="text"
            value={unit}
            onChange={handleChange}
            autoComplete="off"
            name="unit"
            placeholder="unit..."
            className="input__default onew mini"
          />
          </div>
          <div className="addListAlert__buttonContainer">
            <button
              type="button"
              className="buttons__danger pointer"
              onClick={() =>active()}
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
