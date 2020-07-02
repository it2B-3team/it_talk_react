import React, { useState } from "react";
import { Box, Form } from "./Style";
import { Link, Redirect } from "react-router-dom";
import useInput from "../useInput";
import Axios from "axios";
import { withCookies, Cookies } from "react-cookie";
import Group from "../Group/Group";
const Login = (props) => {
  const LoginEvent = async () => {
    await Axios({
      method: "post",
      url: "http://localhost:3002/login",
      params: {
        email: email.value,
        password: password.value,
      },
      json: true,
    })
      .then((response) => {
        if (response.data.login) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("id", response.data.id);
          props.history.push("/Group");
        } else {
          localStorage.setItem("loggedIn", "false");
        }
      })
      .catch((err) => console.log(err));
  };
  const Auth = useState(false);
  const email = useInput("");
  const password = useInput("");

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
          <input {...email} type="email" placeholder="이메일을 입력하세요" />
          <input {...password} type="password" placeholder="비밀번호를 입력하세요" />
          <Link onClick={LoginEvent}>로그인</Link>
          <Link to="/SignUp">회원가입</Link>
        </Form>
      </div>
    </Box>
  );
};

export default Login;
