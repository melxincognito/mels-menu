import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/navigation/Layout";
import Home from "./pages/Home";
import { FetchData } from "./pages/FetchData";
import { Counter } from "./pages/Counter";
import Login from "./pages/Login";
import MyFavorites from "./pages/MyFavorites";
import AddRecipe from "./pages/AddRecipe";
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
        <Route path="/addRecipe" component={AddRecipe} />
      </Layout>
    );
  }
}
