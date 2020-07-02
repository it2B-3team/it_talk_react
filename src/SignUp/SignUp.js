import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Boxx, Form } from "./Style";
import Axios from "axios";
import useInput from "../useInput";

const SignUp = (props) => {
  const email = useInput("");
  const name = useInput("");
  const password = useInput("");
  const job = useInput("");

  const SignUpEvent = () => {
    Axios({
      method: "post",
      url: "http://localhost:3002/signUp",
      params: {
        email: email.value,
        password: password.value,
        name: name.value,
        job: job.value,
      },
      json: true,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const init = () => {
    let auth = localStorage.getItem("loggedIn");
    if (auth === "false") {
      props.history.push("/");
    }
  };

  init();
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
          <input {...email} placeholder="이메일" type="email"></input>
          <input {...password} placeholder="비밀번호" type="password"></input>
          <input {...name} placeholder="이름" type="name"></input>
          <input {...job} placeholder="소속" type="text"></input>
          <Link onClick={SignUpEvent} to="/">
            회원가입
          </Link>
        </Form>
      </Boxx>
    </Box>
  );
};

export default SignUp;
