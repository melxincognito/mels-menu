import React from "react";
import { Form, Button } from "react-bootstrap";

// form to allow users to log into their account on the platform

export default function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="loginEmailInput">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email@email.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="loginUserPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password1234" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep Me Logged In" />
      </Form.Group>
      <Button variant="outline-light">Log In</Button>
    </Form>
  );
}
