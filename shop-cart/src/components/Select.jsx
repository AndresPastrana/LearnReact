import React from "react";

const Select = ({ children = [], ...rest }) => {
  if (children[0].some((e) => e.type !== "option")) {
    throw new Error("Invalid React Element Type, try:  <option></option>");
  }

  return (
    <select {...rest} name="category" defaultValue="all">
      {children}
    </select>
  );
};

export default Select;
