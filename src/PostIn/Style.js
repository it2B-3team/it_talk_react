import styled from "styled-components";
import React from "react";

export const Box = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 935px;
  height: 860px;
  background-color: #ffffff;
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

export const Boxxx = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Boxxxx = styled.div`
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
  margin-top: 15px;
`;

export const Table = styled.table`
  border-spacing: 0;
  border-color: #ffffff;
`;

export const Tr = styled.tr`
  text-align: center;
  height: 50px;
  font-size: 17px;
  td {
    border-bottom: 3px solid #f2f2f2;
  }
`;

export const Td = styled.td`
  font-size: 16px;
`;

export const Back = styled.div`
  display: flex;
  width: 60px;
  height: 40px;
  margin-right: 20px;
  border-right: 1px solid white;
  font-weight: bold;
  line-height: 40px;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    font-weight: bold;
  }
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-radius: 20px;
`;

export const Comments = styled.div`
  flex-direction: column;
  div {
    overflow: hidden;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px solid #f2f2f2;
    span {
      &:first-child {
        margin-right: 30px;
      }
      &:last-child {
        float: right;
      }
    }
  }
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
