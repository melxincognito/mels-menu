import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import Login from "./pages/Login";
import MyFavorites from "./pages/MyFavorites";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/menuItems" component={Counter} />
        <Route path="/mealPlanner" component={FetchData} />
        <Route path="/myFavorites" component={MyFavorites} />
        <Route path="/login" component={Login} />
      </Layout>
    );
  }
}
