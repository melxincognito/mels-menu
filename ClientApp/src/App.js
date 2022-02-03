import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/navigation/Layout";
import Home from "./pages/Home";
import { FetchData } from "./pages/FetchData";
import { Counter } from "./pages/Counter";
import Login from "./pages/Login";
import MyFavorites from "./pages/MyFavorites";
import AddRecipe from "./pages/AddRecipe";
import ForgotPassword from "./pages/ForgotPassword";
import AllMenuItemsPage from "./pages/recipeContentPages/AllMenuItemsPage";
import SignUpSuccessful from "./pages/SignUpSuccessful";
import BreakfastPage from "./pages/recipeContentPages/BreakfastPage";
import LunchPage from "./pages/recipeContentPages/LunchPage";
import DinnerPage from "./pages/recipeContentPages/DinnerPage";
import HealthySnacksPage from "./pages/recipeContentPages/HealthySnacksPage";
import SmoothiesPage from "./pages/recipeContentPages/SmoothiesPage";
import SweetTreatsPage from "./pages/recipeContentPages/SweetTreatsPage";
import DessertsPage from "./pages/recipeContentPages/DessertsPage";
import DepressionMealsPage from "./pages/recipeContentPages/DepressionMealsPage";
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
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/signUpSuccessful" component={SignUpSuccessful} />
        <Route path="/allMenuItems" component={AllMenuItemsPage} />
        <Route path="/breakfast" component={BreakfastPage} />
        <Route path="/lunch" component={LunchPage} />
        <Route path="/dinner" component={DinnerPage} />
        <Route path="/sweetTreats" component={SweetTreatsPage} />
        <Route path="/healthySnacks" component={HealthySnacksPage} />
        <Route path="/desserts" component={DessertsPage} />
        <Route path="/smoothies" component={SmoothiesPage} />
        <Route path="/depressionMeals" component={DepressionMealsPage} />
      </Layout>
    );
  }
}
