import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

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
    screen.debug();
  });
});
