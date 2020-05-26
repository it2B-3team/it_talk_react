import styled from "styled-components";
import React from "react";

export const Box = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 875px;
  height: 800px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 5px 0px #3ca0b4;
  -moz-box-shadow: 5px 5px 5px 0px #3ca0b4;
  box-shadow: 5px 5px 5px 0px #3ca0b4;
  display: flex;
  justify-content: center;
`;

export const In_Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding-left: 15px;
    margin: 5px;
    height: 50px;
    font-size: 20px;
    font-family: "Noto Sans KR", sans-serif;
    &:focus {
      -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
    }
  }
  button {
    height: 60px;
    width: 250px;
    border-radius: 20px;
    border: none;
    margin: 0 auto;
    margin-top: 15px;
    background-color: #3393f0;
    font-size: 30px;
    color: white;
    cursor: pointer;
    box-shadow: 3px 3px black;

    font-family: "BMJUA";
  }
`;
