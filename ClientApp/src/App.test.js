import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";

it("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

// making sure the homepage doesnt have too many divs rendered

describe("HomePage", () => {
  test("renders main homepage component", () => {
    render(<Home />);
  });
});

describe("Login/Sign Up Page", () => {
  test("renders Signup form", () => {
    render(<SignUpForm />);
  });
});

describe("Login/Sign Up Page", () => {
  test("renders Login form", () => {
    render(<LoginForm />);
    screen.debug();
  });
});
