import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Dashboard from "./components/Dashboard";
import MyCart from "./components/MyCart";
import Filter from "./components/Filter";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Filter />
        <MyCart />
        <Dashboard />
      </Provider>
    );
  }
}

store.subscribe(() => {
  console.log(store.getState());
});

export default App;
