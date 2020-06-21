import React, { useState } from "react";
import Login from "./Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Chatroom from "./Chatroom/Chatroom";
import Group from "./Group/Group";
import GroupIn from "./GroupIn/GroupIn";
import Chat from "./Chat/Chat";
import styled from "styled-components";
import Axios from "axios";

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
function App() {
  Axios({
    method: "post",
    url: "http://localhost:3002/signUp",
    params: {
      email: "gptjd1297@gmail.com",
      password: "star5454",
      username: "hyeseong",
      tel: "010-9406-4167",
    },
    json: true,
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Chat" component={Chat} />
          <Route path="/Chatroom" component={Chatroom} />
          <Route path="/Group" component={Group} />
          <Route path="/GroupIn" component={GroupIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
