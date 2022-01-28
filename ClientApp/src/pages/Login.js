import React, { Component } from "react";
import Card from "../components/ui/Card";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Card BackgroundColor="black">
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-warning" type="button">
              Log In
            </button>
            <button className="btn btn-outline-light" type="button">
              Sign Up
            </button>
          </div>
        </Card>
        <Card BackgroundColor="gray">
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
