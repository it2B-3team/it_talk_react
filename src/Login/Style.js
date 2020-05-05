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
