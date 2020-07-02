import React, { useState, useEffect } from "react";
import { Box, Footer, LeftChat, RightChat, ChatBox, ChatWrap, Image } from "./Style";
import Axios from "axios";
import io from "socket.io-client";

const Chat = (props) => {
  const socket = io.connect("http://localhost:3002");

  const [user_id, setUser_id] = useState(localStorage.getItem("id")); // 내 id number
  const [message, setMessage] = useState(""); // input 용

  const [chattings, setChattings] = useState([{}]); // 채팅들
  const [loading, setLoading] = useState(false);

  const props_data = props.location.state; //내 id 상대 id 구하기

  const [room, setRoom] = useState(props_data.room_number.room_id); //방 넘버
  const my_id = Number(props_data.my_id); //내 id
  const your_id = Number(props_data.your_id); //상대 id

  const [me, setMe] = useState({}); //나
  const [you, setYou] = useState({}); //상대

  let default_chat;

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const init = () => {
    let auth = localStorage.getItem("loggedIn");
    if (auth === "false") {
      props.history.push("/");
    }
  };

  const onSubmit = async (e) => {
    if (e.charCode === 13) {
      Axios({
        method: "post",
        params: { message, room, my_id },
        url: "http://localhost:3002/chat_message",
      });
      socket.emit("send_msg", {
        received_chattings: [...chattings, { message, user: my_id }],
        room,
        received_id: my_id,
      });
      setMessage("");
      let scroll = document.getElementById("scrollElement");
      scroll.scrollTop = scroll.scrollHeight;
    }
  };

  const chat_request = (room_id) => {
    Axios({
      method: "post",
      params: { my_id, your_id, room_id },
      url: "http://localhost:3002/chat_request",
    }).then(({ data }) => {
      const user_data = data.users;
      const message_data = data.messages;
      if (data) {
        if (my_id === Number(user_data[0].userid)) {
          setMe(user_data[0]);
          setYou(user_data[1]);
        } else if (my_id === Number(user_data[1].userid)) {
          setMe(user_data[1]);
          setYou(user_data[0]);
        }
        if (data) {
          setChattings(data.messages);
          default_chat = chattings;
        }
      }
      setLoading(true);
    });
  };

  const room_request = () => {
    Axios({
      method: "post",
      params: { my_id, your_id },
      url: "http://localhost:3002/room_request",
    }).then(({ data }) => {
      setRoom(data.room_id);

      chat_request(data.room_id);
    });
  };

  useEffect(() => {
    socket.emit("room_join", room);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  socket.on("receive_msg", ({ received_chattings, room, received_id }) => {
    setChattings(received_chattings);
    let scroll = document.getElementById("scrollElement");
    scroll.scrollTop = scroll.scrollHeight;
  });

  useEffect(() => {
    init();
    room_request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Box>
      <ChatWrap>
        <ChatBox id="scrollElement">
          {chattings.map((chat) =>
            Number(chat.user) === Number(me.userid) ? (
              <RightChat>
                <div>{chat.message}</div>
                <Image src={me.img}></Image>
              </RightChat>
            ) : (
              <LeftChat>
                <Image src={you.img}></Image>
                <div>{chat.message}</div>
              </LeftChat>
            )
          )}
        </ChatBox>
        <Footer onKeyPress={onSubmit} value={message} onChange={onChangeMessage}></Footer>
      </ChatWrap>
    </Box>
  );
};

export default Chat;
