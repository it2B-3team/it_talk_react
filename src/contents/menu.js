import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./modal";
export const Menu = (props) => {
  const [user_id, setUser_id] = useState(localStorage.getItem("id")); // 내 id number

  const [modal, setModal] = useState(false);

  const visible_toggle = (visible_bool = true) => {
    setModal(visible_bool);
  };

  const Menu = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 20px 30px;
    width: 875px;
    height: 90px;
    background-color: #f2f2f2;
    border-radius: 15px 15px 0 0;
  `;

  const Icon = styled.div`
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
  return (
    <Menu>
      <Icon>
        <Modal visible={modal} visible_toggle={visible_toggle} my_id={user_id}></Modal>
        <Link to="Chat">
          <img
            src="./images/그룹페이지-icon-1.gif"
            width="90"
            height="90"
            alt=""
            srcset=""
          />
        </Link>
      </Icon>
      <Icon>
        <Link to="Group">
          <img
            src="./images/그룹페이지-icon-2.gif"
            width="90"
            height="90"
            alt=""
            srcset=""
          />
        </Link>
      </Icon>
      <Icon>
        <img
          src="./images/그룹페이지-icon-3.gif"
          width="90"
          height="90"
          alt=""
          srcset=""
        />
      </Icon>
      <Icon onClick={visible_toggle}>
        <img
          src="./images/그룹페이지-icon-4.jpg"
          width="90"
          height="90"
          alt=""
          srcset=""
        />
      </Icon>
    </Menu>
  );
};
export default Menu;
