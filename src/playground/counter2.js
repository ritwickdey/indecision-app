const STORAGE_KEY = "my-counter-storage";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.setState(() => ({
      count: JSON.parse(localStorage.getItem(STORAGE_KEY) || "0")
    }));
  }

  componentDidUpdate() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.count));
  }

  handleAddOne() {
    this.setState(oldState => {
      return {
        count: oldState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(oldState => {
      return {
        count: oldState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>clear</button>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<Counter />, appRoot);
