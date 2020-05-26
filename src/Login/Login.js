import React from "react";
import { Box, In_Box, Form } from "./Style";

const Login = () => {
  return (
    <Box>
      <div>
        <img
          src="./images/로그인페이지_03.jpg"
          width="324"
          height="277"
          alt=""
          srcset=""
        />
        <Form action="">
          <input type="email" name="" id="" placeholder="이메일을 입력하세요" />
          <input type="password" name="" id="" placeholder="비밀번호를 입력하세요" />
          <button>로그인</button>
          <button>회원가입</button>
        </Form>
      </div>
    </Box>
  );
};

export default Login;
