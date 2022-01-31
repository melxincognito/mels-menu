import React from "react";
import { Form, Button } from "react-bootstrap";

// form to allow users to log into their account on the platform

export default function LoginForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="loginUsernameInput">
          <Form.Label>Username</Form.Label>
          <Form.Control type="name" placeholder="@my-username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginUserPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password1234" />

          <Form.Text className="text-muted">
            {" "}
            Forgot password? <a href="/forgotPassword"> Click here</a>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="stayLoggedInCheck">
          <Form.Check type="checkbox" label="Keep Me Logged In" />
        </Form.Group>
        <div className="d-grid gap-2 mt-4">
          <Button variant="outline-light" size="lg">
            Log In
          </Button>
        </div>
      </Form>
    </>
  );
}
