class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <p>Your Computer's Choice</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        <li>Hello</li>
        <li>Hi</li>
        <li>Hey</li>
      </ol>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
