import styled from "styled-components";
import React from "react";

export const Box = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 800px;
  height: 800px;
  background-color: ghostwhite;
  border-radius: 20px;
  padding: 30px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
`;
export const Input_Box = styled.input`
  width: 300px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 0 3px;
  &:focus {
    -webkit-box-shadow: 0px 0px 13px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 13px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 13px -5px rgba(0, 0, 0, 0.75);
  }
`;
export const Input_Form = styled.form`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Login_Text = styled.h4`
  margin: 0;
  padding: 0 5px;
`;
export const LogIn = styled.div`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 25px;
  padding: 0 3px;
  background-color: gray;
  font-weight: bold;
  color: ghostwhite;
  text-align: center;
  line-height: 50px;
  -webkit-box-shadow: 0px 4px 10px -2px rgba(105, 104, 105, 1);
  -moz-box-shadow: 0px 4px 10px -2px rgba(105, 104, 105, 1);
  box-shadow: 0px 4px 10px -2px rgba(105, 104, 105, 1);
`;
export const SignUp = styled.div`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 30px;
  padding: 0 3px;
  background-color: gray;
  font-weight: bold;
  color: ghostwhite;
  text-align: center;
  line-height: 50px;
  -webkit-box-shadow: 0px 4px 20px -2px rgba(105, 104, 105, 1);
  -moz-box-shadow: 0px 4px 20px -2px rgba(105, 104, 105, 1);
  box-shadow: 0px 4px 20px -2px rgba(105, 104, 105, 1);
`;
