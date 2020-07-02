import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Boxx,
  Menu,
  TT,
  Table,
  Tr,
  Td,
  Post,
  Back,
  Report,
  PostMenu,
  Plus,
  PostBar,
  Plan,
} from "./Style";

const PostUp = (props) => {
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
        <Menu>
          <Back>
            <Link to="TotalPost">뒤로</Link>
          </Back>
          <Report>공지사항 | 캡스톤 디자인 프로젝트 개발하기</Report>
        </Menu>
        <TT>
          <div>
            <Table>
              <tbody>
                <Tr>
                  <Td colSpan="3">
                    <input type="text" name="title" placeholder="제목"></input>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <input type="text" name="writer" placeholder="작성자"></input>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <select>
                      <option>공지사항</option>
                      <option>과제</option>
                      <option>설문</option>
                      <option>공유</option>
                      <option>기타</option>
                    </select>
                  </Td>
                </Tr>
                <Tr>
                  <Td colSpan="3">
                    <textarea name="content" placeholder="내용"></textarea>
                  </Td>
                </Tr>
                <Tr>
                  <Td colSpan="3">
                    <input type="file" name="file" placeholder="파일"></input>
                  </Td>
                </Tr>
                <Tr>
                  <Td colSpan="2">
                    <button>등 록</button>
                    <button>취 소</button>
                  </Td>
                </Tr>
              </tbody>
            </Table>
          </div>
        </TT>
      </Boxx>
    </Box>
  );
};

export default PostUp;
