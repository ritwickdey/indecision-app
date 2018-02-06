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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input autoComplete="off" type="text" name="options" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
