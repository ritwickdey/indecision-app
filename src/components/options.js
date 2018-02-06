import React from "react";
import { Option } from "./option";

export const Options = props => {
  const optionValues = props.options || [];
  return (
    <div>
      <div>
        <p>Your options</p>
        <button
          className="button button--link"
          disabled={optionValues.length <= 0}
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {optionValues.length != 0 && (
        <ol>
          {optionValues.map(e => (
            <Option
              value={e}
              key={e}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))}
        </ol>
      )}
      {optionValues.length == 0 && <p>Please add few options to get started!</p>}
    </div>
  );
};
