import React from "react";
import { Box, Boxx, Form } from "./Style";

const Login = () => {
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
          <input placeholder="이메일을 입력하세요" type="email"></input>
          <input placeholder="비밀번호를 입력하세요" type="password"></input>
          <button>로그인</button>
          <button>회원가입</button>
        </Form>
      </Boxx>
    </Box>
  );
};

export default Login;
