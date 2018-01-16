const counter = (state = 0, action) => {
 switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
  
);

const { createStore } = Redux;
const store = createStore(counter);

const increment = () => {
	return store.dispatch({ type: "INCREMENT" });
};
const decrement = () => {
	 return store.dispatch({ type: "DECREMENT" })
}

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={increment}
      onDecrement={decrement}
    />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
