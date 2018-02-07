import React from "react";

export class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.options.value
      ? e.target.options.value.trim()
      : null;

    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) e.target.options.value = "";
  };

  render() {
    return (
      <div>
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="input-text add-option__input"
            autoComplete="off"
            type="text"
            name="options"
            placeholder="add your options"
          />
          <button className="button">Add option</button>
        </form>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      </div>
    );
  }
}
