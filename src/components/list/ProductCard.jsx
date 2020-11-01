import React, { useContext, useEffect } from "react";
import { deleteProduct } from "../../services/lists.services";
import EntrieContext from "../contexts/EntrieContext";
import { FaTrash } from "react-icons/fa";

const ProductCard = ({ data, id }) => {
  const { fields, setFields, entrie } = useContext(EntrieContext);
  const handleCLick = () => {
    const field = fields[id];
    const filtrate = fields.filter((m) => m != field)
    deleteProduct(entrie._id, filtrate);
    setFields(filtrate);
  };

  useEffect(() => {
    
  }, [fields])
  return (
    <div className="entries__containertwo animate__animated animate__bounceInDown">
      <div
        className="entrie-productCard__container"
      >
        <div style={{ padding: "0px 20px" }}>{data.product}</div>
        <div
          style={{ padding: "0px 20px" }}
          className="entrie-productCard__info"
        >
          <div>{data.quantity}</div>
          <div>{data.unit}</div>
        </div>
      </div>
      <div className="pointer product__trash" onClick={handleCLick}>
        <FaTrash />
      </div>
    </div>
  );
};

export default ProductCard;
