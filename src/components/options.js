import React from "react";
import { Option } from "./option";

export const Options = props => {
  const optionValues = props.options || [];
  return (
    <div>
      {optionValues.length == 0 && <p>No options</p>}
      {optionValues.length != 0 && (
        <div>
          <p>Here are your options</p>
          <button
            className="button button--link"
            onClick={props.handleDeleteOptions}
          >
            Remove All
          </button>
          <ol>
            {optionValues.map(e => (
              <Option
                value={e}
                key={e}
                handleDeleteOption={props.handleDeleteOption}
              />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
