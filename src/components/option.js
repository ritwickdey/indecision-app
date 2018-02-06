import React from "react";

export const Option = props => {
  const { value, index } = props;

  return (
    <li className="option">
      <p className="option--text">
        {index}. {value}
      </p>
      <button
        className="button button--link"
        onClick={() => props.handleDeleteOption(value)}
      >
        remove
      </button>
    </li>
  );
};
