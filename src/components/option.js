import React from "react";

export const Option = props => {
  const { value } = props;

  return (
    <li>
      {value}
      <button onClick={() => props.handleDeleteOption(value)}>remove</button>
    </li>
  );
};
