import React from "react";
import Card from "../components/ui/Card";

export default function SignUpSuccessful() {
  return (
    <>
      <Card display="grid" height="100px">
        <h4>Thanks for joining!</h4>
        <label> Check your inbox to confirm your email</label>
      </Card>
      <Card height="50px">
        <h4>
          {" "}
          <a href="/login">Click here</a> to go back to the login page
        </h4>
      </Card>
    </>
  );
}
