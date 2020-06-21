import styled from "styled-components";

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  border: 2px solid blueviolet;
  margin: 5px;
`;

export const ChatWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
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
export const Footer = styled.textarea`
  height: 5%;
  width: 80%;
  border-radius: 30px;
  opacity: 70%;
  background-color: silver;
  padding: 10px 100px 10px 20px;
  font-size: 30px;
  border: none;
  &:focus {
    border: 1px solid black;
    outline: none;
  }
  overflow: hidden;
  resize: none;
`;
export const ChatBox = styled.div`
  width: 100%;
  height: 85%;
  overflow: auto;
  span {
    font-size: 30px;
    padding: 10px;
    display: block;
    overflow: hidden;
  }
`;
export const LeftChat = styled.div`
  width: 100%;
  display: flex;
  img {
    float: left;
  }
`;
export const RightChat = styled.div`
  width: 100%;
  display: flex;
  img {
    float: right;
  }
  div {
    margin: 0 0 0 auto;
  }
`;
