import React from "react";
import { Link } from "react-router-dom";
import { Box, Boxx, Menu, Icon, Room } from "./Style";

const Group = () => {
  let rooms = [
    { id: 1, name: "it 응용보안과 그룹" },
    { id: 2, name: "캡스톤 디자인 그룹" },
    { id: 3, name: "전구 그룹" },
    { id: 4, name: "" },
    { id: 5, name: "" },
    { id: 6, name: "" },
    { id: 7, name: "" },
  ];

  return (
    <Box>
      <Boxx>
        <Menu>
          <Icon>
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
            <img
              src="./images/그룹페이지-icon-2.gif"
              width="90"
              height="90"
              alt=""
              srcset=""
            />
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
          <Icon>
            <img
              src="./images/그룹페이지-icon-4.jpg"
              width="90"
              height="90"
              alt=""
              srcset=""
            />
          </Icon>
        </Menu>
        {rooms.map((room) => {
          return (
            <Link to="/GroupIn">
              <Room>{room.name}</Room>
            </Link>
          );
        })}
      </Boxx>
    </Box>
  );
};

export default Group;
