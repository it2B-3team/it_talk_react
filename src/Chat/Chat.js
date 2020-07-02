import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Boxx, Room, Image } from "./Style";
import Axios from "axios";
import Menu from "../contents/menu";

const Chat = (props) => {
  const [rooms, setRooms] = useState([]);

  const [user_id, setUser_id] = useState(localStorage.getItem("id"));

  const init = () => {
    let auth = localStorage.getItem("loggedIn");
    if (auth === "false") {
      props.history.push("/");
    }
  };

  init();

  const group_request = async () => {
    await Axios({
      method: "post",
      url: "http://localhost:3002/friends",
      params: {
        user_id,
      },
      json: true,
    })
      .then((response) => {
        setRooms(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    group_request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      <Boxx>
        <Menu></Menu>

        {rooms.map((room) => {
          return (
            <Link
              to={{
                pathname: "/Chatroom",
                state: {
                  my_id: user_id,
                  your_id: room.id,
                  room_number: room.room_number,
                },
              }}
            >
              <Room>
                <Image src={room.img} width="70" height="70"></Image>
                {room.name}
              </Room>
            </Link>
          );
        })}
      </Boxx>
    </Box>
  );
};

export default Chat;
