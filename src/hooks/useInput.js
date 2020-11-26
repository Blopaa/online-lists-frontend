import { useState } from 'react';

export const useInput = (initialState = {}) => {
  const [value, setvalue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    console.log(value);
    setvalue({
      ...value,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setvalue(initialState);
  };

  return [value, handleInputChange, reset];
};
