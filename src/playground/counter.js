let Count = 0;
const addOne = () => {
  Count++;
  renderCounterApp();
};
const minusOne = () => {
  Count--;
  renderCounterApp();
};
const reset = () => {
  Count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");
const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {Count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
