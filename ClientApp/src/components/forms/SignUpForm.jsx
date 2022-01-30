import React from "react";
import { Form, Button } from "react-bootstrap";

export default function SignUpForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="signUpUsernameInput">
          <Form.Label>1. Pick a username</Form.Label>
          <Form.Control type="name" placeholder="@your-new-username73" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signUpEmailInput">
          <Form.Label>2. Enter Your Email Address</Form.Label>
          <Form.Control type="email" placeholder="email@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>3. Enter A Password</Form.Label>
          <Form.Control type="password" placeholder="P@ssword3x@mple" />
        </Form.Group>
        <Form.Group className="display-flex" controlId="formBasicCheckbox">
          <div style={{ display: "flex" }}>
            <Form.Text className="text-muted">
              {" "}
              4. Agree to sites{" "}
              <a href="/menuItems" target="_blank">
                Terms & Conditions
              </a>
            </Form.Text>
            <Form.Check type="checkbox" />
          </div>
        </Form.Group>
        <div className="d-grid gap-2 mt-4">
          <Button variant="light" size="lg">
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );
}
