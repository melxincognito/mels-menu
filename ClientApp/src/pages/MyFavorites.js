import React, { Component } from "react";
import Card from "../components/ui/Card";

export default class MyFavorites extends Component {
  render() {
    return (
      <div>
        {" "}
        <Card BackgroundImage="https://images.unsplash.com/photo-1489069313310-63735a4f3010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80">
          {" "}
          My Favorites{" "}
        </Card>
        <Card BackgroundColor="gray">
          Log in or Sign Up to save recipes to your favorites!
        </Card>
      </div>
    );
  }
}
