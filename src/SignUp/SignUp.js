import React from "react";
import { Link } from "react-router-dom";
import { Box, Boxx, Form } from "./Style";

const SignUp = () => {
  return (
    <Box>
      <Boxx>
        <img
          src="./images/로그인페이지_03.jpg"
          width="324"
          height="277"
          alt=""
          srcset=""
        />
        <Form>
          <input placeholder="이메일" type="email"></input>
          <input placeholder="비밀번호" type="password"></input>
          <input placeholder="이름" type="name"></input>
          <input placeholder="소속" type="text"></input>
          <Link to="/">회원가입</Link>
        </Form>
      </Boxx>
    </Box>
  );
};

export default SignUp;
