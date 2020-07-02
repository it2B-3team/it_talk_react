import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Boxx, Icon, Room } from "./Style";
import Menu from "../contents/menu";
import Axios from "axios";

const Group = (props) => {
  const [groups, setGroups] = useState([]);

  const [user_id, setUser_id] = useState(localStorage.getItem("id"));

  const group_request = async () => {
    await Axios({
      method: "post",
      url: "http://localhost:3002/groups",
      params: {
        user_id,
      },
      json: true,
    })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    group_request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Menu></Menu>
        {groups.map((room) => {
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
