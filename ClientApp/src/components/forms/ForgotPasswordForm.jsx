import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function ForgotPasswordForm() {
  let history = useHistory();

  const resetPasswordClick = () => {
    alert("Check your inbox for the link to reset your password!");
    let path = `/login`;
    history.push(path);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="usernameForgotPassword">
          <Form.Label>Enter your account username:</Form.Label>
          <Form.Control type="name" placeholder="@your-username" />
        </Form.Group>
        <h4> or </h4>
        <Form.Group className="mb-3" controlId="emailForgotPassword">
          <Form.Label>Enter your account email:</Form.Label>
          <Form.Control type="email" placeholder="email@youremail" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="light" size="lg" onClick={resetPasswordClick}>
            Email Reset Password Link
          </Button>
        </div>
      </Form>
    </>
  );
}
