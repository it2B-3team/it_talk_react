import React, { useMemo } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import useInput from "../useInput";
import Axios from "axios";
const Input = styled.input`
  height: 40px;
  font-size: 20px;
  vertical-align: middle;
`;
const AddFriend = ({ my_id, visible_toggle }) => {
  const friend_id = useInput("");

  const add_friend = () => {
    Axios({
      url: "http://localhost:3002/add_friend",
      method: "post",
      params: {
        my_id,
        friend_id: friend_id.value,
      },
    }).then(({ data }) => {
      visible_toggle(false);
      window.location.reload();
      console.log(data);
    });
  };

  return (
    <>
      <Input {...friend_id} type="text" placeholder="친구의 id를 입력하세요"></Input>
      <Button onClick={add_friend} variant="contained" size="large">
        추 가
      </Button>
    </>
  );
};
export default React.memo(AddFriend);
