const appRoot = document.getElementById("app");

let isVisible = false;
const getButtonTxt = () => {
  const SHOW = "Show the text";
  const HIDE = "Hide the text";
  return isVisible ? HIDE : SHOW;
};
const toggleState = e => {
  isVisible = !isVisible;
  e.target.innerHTML = getButtonTxt();
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleState}>{getButtonTxt()}</button>
      <p>
        {isVisible && "This is a text thats hidden property can be toggled"}
      </p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
