import styled from "styled-components";
import React from "react";

export const Box = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 935px;
  height: 860px;
  background-color: #003d66;
  border-radius: 15px;
  -webkit-box-shadow: 5px 5px 5px 0px #3ca0b4;
  -moz-box-shadow: 5px 5px 5px 0px #3ca0b4;
  box-shadow: 5px 5px 5px 0px #3ca0b4;
  display: flex;
  justify-content: center;
`;

export const Boxx = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 10px 30px;
  width: 875px;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 15px 15px 0 0;
`;

export const TT = styled.div`
  margin: 0 auto;
  margin-top: 100px;
`;

export const Table = styled.table`
  border-spacing: 0;
  border-radius: 15px;
  background-color: #f2f2f2;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 5px 0px #000000;
  -moz-box-shadow: 5px 5px 5px 0px #000000;
  box-shadow: 5px 5px 5px 0px #000000;
`;

export const Tr = styled.tr`
  text-align: center;
  border: 2px solid #f2f2f2;
  height: 50px;
  font-size: 18px;
  td {
  }
`;

export const Td = styled.td`
  font-weight: bold;
  font-size: 17px;
  input {
    width: 600px;
    height: 30px;
    font-size: 17px;
    &:focus {
      -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
    }
  }
  textarea {
    margin: 10px 0;
    width: 600px;
    height: 250px;
    font-size: 17px;
  }
  button {
    margin: 5px;
    width: 70px;
    height: 30px;
    border: none;
    background-color: #b8b8b8;
    font-size: 17px;
    &:hover {
      -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.5);
    }
  }
  select {
    float: left;
    width: 100px;
    height: 35px;
    font-size: 17px;
  }
`;

export const Back = styled.div`
  display: flex;
  width: 60px;
  height: 40px;
  margin-right: 20px;
  font-weight: bold;
  line-height: 40px;
  justify-content: center;
`;

export const Report = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-radius: 20px;
  background-color: white;
`;

export const PostMenu = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    float: left;
  }
  width: 880px;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  margin: 5px 0;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
`;

export const Icon = styled.div`
  display: flex;
  width: 200px;
  height: 90px;
  border-right: 2px solid #ffffff;
  justify-content: center;
  &:last-child {
    border-right: none;
    margin-left: 415px;
  }
`;

export const Plus = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  line-height: 50px;
  justify-content: center;
  font-size: 40px;
`;

export const PostBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    float: left;
  }
  width: 895px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin: 0 10px;
  border-bottom: 3px solid #f2f2f2;
  font-size: 25px;
  font-weight: bold;
`;
