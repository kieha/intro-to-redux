// es6 destructuring syntax
const { createStore } = Redux;

// equivalent ways of writing the same:
// var createStore = Redux.createStore;

// using npm and es6 transpiler
// import { createStore } from "redux";

const store = createStore(counter);

// store methods
// 1. getState() - retreives current state of app
// 2. dispatch() - lets you dispatch actions to change state of app
// 3. subscribe() - lets you register callback that the store will call any time an action has been dispatched. Rerender app
// with current state

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: "INCREMENT" });
});
