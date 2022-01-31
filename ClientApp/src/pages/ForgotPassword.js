import React from "react";
import Card from "../components/ui/Card";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div>
      <Card BackgroundColor="black" height="100px">
        <label> Forgot your password? No Problem!</label>
      </Card>
      <Card>
        <ForgotPasswordForm />
      </Card>
    </div>
  );
}
