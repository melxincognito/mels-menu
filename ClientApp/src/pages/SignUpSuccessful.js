import React from "react";
import Card from "../components/ui/Card";

export default function SignUpSuccessful() {
  return (
    <>
      <Card display="flex-box">
        <h2>Thanks for joining!</h2>
        <h4> Check your inbox to confirm your email</h4>
      </Card>
      <Card height="50px">
        <h4>
          {" "}
          <a href="/">Click here</a> to go back to the homepage
        </h4>
      </Card>
    </>
  );
}
