class VisiblityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleStatus = this.handleToggleStatus.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleStatus() {
    this.setState(oldState => {
      return {
        visibility: !oldState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleStatus}>
          {this.state.visibility ? "Hide text" : "Show text"}
        </button>
        {this.state.visibility && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            porro necessitatibus quaerat officiis ducimus. Deleniti labore
            reiciendis facilis animi porro necessitatibus cupiditate saepe
            temporibus minima debitis, quia in consequatur quibusdam.
          </p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById("app"));
