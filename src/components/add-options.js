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
        <form className="widget-buttom" onSubmit={this.handleAddOption}>
          <input
            className="input-text input-text--75"
            autoComplete="off"
            type="text"
            name="options"
            placeholder="add your options"
          />
          <button className="button">Add Option</button>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    );
  }
}
