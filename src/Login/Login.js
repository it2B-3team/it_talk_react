import React from "react";
import { Box, Input_Box, Input_Form, Login_Text, LogIn, SignUp } from "./Style";

const Login = () => {
  return (
    <Box>
      <div>
        <img
          src="https://topclass.chosun.com/news_img/1807/1807_008.jpg"
          width="310px"
          height="310px;"
        />
        <Input_Form>
          <Login_Text>Email</Login_Text>
          <Input_Box placeholder="Email" />
          <Login_Text>Password</Login_Text>
          <Input_Box placeholder="Password" />
        </Input_Form>
        <LogIn>Log In</LogIn>
        <SignUp>Sign Up</SignUp>
      </div>
    </Box>
  );
};

export default Login;
