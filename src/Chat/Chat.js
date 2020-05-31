import React from "react";
import { Box, Boxx, Menu, Icon, Room, Image } from "./Style";

const Chat = () => {
  let rooms = [
    {
      id: 1,
      name: "전혜성",
      img:
        "https://i.pinimg.com/originals/50/f3/00/50f300a6980d8e7f3117181c3e18658e.jpg",
    },
    {
      id: 2,
      name: "구은주",
      img:
        "https://t1.daumcdn.net/liveboard/catlab/4f23caf0cfd945779c72d78317140b37.JPG",
    },
    { id: 3, name: "" },
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
            <img
              src="./images/그룹페이지-icon-1.gif"
              width="90"
              height="90"
              alt=""
              srcset=""
            />
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
            <Room>
              <Image src={room.img} width="70" height="70"></Image>
              {room.name}
            </Room>
          );
        })}
      </Boxx>
    </Box>
  );
};

export default Chat;
