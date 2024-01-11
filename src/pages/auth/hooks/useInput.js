import React, { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  return [value, onValueChangeHandler];
};

export default useInput;
