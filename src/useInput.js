import React, { useState } from "react";

export default (initValue) => {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  console.log(value);

  return { value, onChange };
};
