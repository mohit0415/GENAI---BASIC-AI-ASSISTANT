import React from "react";
import bdlLogin from "../../assets/images/bdlLogin.jpg";
import Card from "../../components/Card";

const Login = () => {
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${bdlLogin})` }}
    >
      <div className="flex justify-end items-center min-h-screen px-12">
        <Card bgColor={`cyan`}>
          <p>Login Page</p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
