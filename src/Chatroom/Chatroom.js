import React, { useState, useEffect } from "react";
import { Box, Footer, ChatBox, ChatWrap, Image } from "./Style";
import Axios from "axios";
import io from "socket.io-client";

const Chat = (props) => {
  const socket = io.connect("http://localhost:3002");

  const [user_id, setUser_id] = useState(localStorage.getItem("id")); // 내 id number
  const [message, setMessage] = useState(""); // input 용

  const [loading, setLoading] = useState(false);

  const props_data = props.location.state; //내 id 상대 id 구하기

  const [room, setRoom] = useState(props_data.room_number.room_id); //방 넘버
  const my_id = Number(props_data.my_id); //내 id
  const your_id = Number(props_data.your_id); //상대 id

  const [me, setMe] = useState();

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
    let scroll = document.getElementById("scrollElement");
    if (e.charCode === 13) {
      Axios({
        method: "post",
        params: { message, room, my_id },
        url: "http://localhost:3002/chat_message",
      });
      socket.emit("send_msg", {
        received_chattings: { message, user: my_id },
        room,
        me,
      });
      setMessage("");
      scroll.scrollTop = scroll.scrollHeight;
    }
  };

  const chat_request = (room_id) => {
    let scroll = document.getElementById("scrollElement");
    Axios({
      method: "post",
      params: { my_id, your_id, room_id },
      url: "http://localhost:3002/chat_request",
    }).then(({ data }) => {
      const user_data = data.users;
      const message_data = data.messages;
      if (data)
        data.messages.map((message) => {
          let user1;
          let user2;

          if (Number(my_id) === Number(user_data[0].userid)) {
            user1 = user_data[0];
            user2 = user_data[1];
          } else {
            user1 = user_data[1];
            user2 = user_data[0];
          }

          const chat = document.createElement("div");
          let chat_message = document.createElement("div");
          const chat_img = document.createElement("img");
          chat_message.innerHTML = message.message;

          if (Number(message.user) === my_id) {
            chat_img.src = user1.img;
            chat.setAttribute("id", "rightChat");
            chat.append(chat_message);
            chat.append(chat_img);
            scroll.append(chat);
          } else if (Number(message.user) === your_id) {
            chat_img.src = user2.img;
            chat.setAttribute("id", "leftChat");
            chat.append(chat_img);
            chat.append(chat_message);
            scroll.append(chat);
          }
        });
      setLoading(true);
      scroll.scrollTop = scroll.scrollHeight;
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
    room_request();

    Axios({
      method: "post",
      params: { my_id },
      url: "http://localhost:3002/me",
    }).then(({ data }) => {
      setMe(data[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  socket.on("receive_msg", ({ received_chattings: { message, user }, me }) => {
    let scroll = document.getElementById("scrollElement");
    scroll.scrollTop = scroll.scrollHeight;

    const chat = document.createElement("div");
    const chat_message = document.createElement("div");
    const chat_img = document.createElement("img");
    chat_message.innerHTML = message;
    chat_img.src = me.img;
    if (Number(me.userid) === my_id) {
      chat.setAttribute("id", "rightChat");
      chat.append(chat_message);
      chat.append(chat_img);
    } else {
      chat.setAttribute("id", "leftChat");
      chat.append(chat_img);
      chat.append(chat_message);
    }

    scroll.append(chat);
    scroll.scrollTop = scroll.scrollHeight;
  });

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Box>
      <ChatWrap>
        <ChatBox id="scrollElement"></ChatBox>
        <Footer onKeyPress={onSubmit} value={message} onChange={onChangeMessage}></Footer>
      </ChatWrap>
    </Box>
  );
};

export default Chat;
