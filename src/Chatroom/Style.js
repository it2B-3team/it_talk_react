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
