import React, { Component } from "react";
import Card from "../components/ui/Card";
import LoginForm from "../components/forms/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Card BackgroundColor="PaleVioletRed" height="100px">
          {" "}
          <h2> Log in to your account</h2>
        </Card>
        <Card BackgroundColor="black" height="320px">
          <LoginForm />
        </Card>
        <Card BackgroundColor="PaleVioletRed">
          <div className="d-grid gap-2 col-6 mx-auto">
            Anyone can use our site to browse recipes & share them with friends.
            However, registered users will have access to our weekly meal
            planner, be able to save favorite recipes and have the option to
            receive email updates when new recipes are uploaded to the site.
          </div>
        </Card>
      </div>
    );
  }
}
