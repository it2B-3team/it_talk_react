import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Boxx,
  Boxxx,
  Boxxxx,
  Menu,
  TT,
  Table,
  Tr,
  Td,
  Post,
  Back,
  Title,
  Comments,
  PostMenu,
  Plus,
  PostBar,
  Plan,
} from "./Style";

const PostIn = (props) => {
  let posts = [
    {
      id: 1,
      c: "공지사항",
      t: "과제 제출 서둘러 주세요",
      h: "전혜성",
      d: "1시간 전",
      s: "1",
    },
    {
      id: 2,
      c: "설문",
      t: "과제 회의일 정합시당",
      h: "구은주",
      d: "2020.06.01",
      s: "4",
      content:
        "과제 회의 언제할깡 내일, 모레 중에 언제가 좋아? 배고파 마라탕 먹자 고양이 카페 가자",
    },
    { id: 3, c: "", t: "", h: "", d: "", s: "" },
    { id: 4, c: "", t: "", h: "", d: "", s: "" },
    { id: 5, c: "", t: "", h: "", d: "", s: "" },
    { id: 6, c: "", t: "", h: "", d: "", s: "" },
    { id: 7, c: "", t: "", h: "", d: "", s: "" },
    { id: 8, c: "", t: "", h: "", d: "", s: "" },
    { id: 9, c: "", t: "", h: "", d: "", s: "" },
  ];

  let comments = [
    { id: 1, name: "전혜성", content: "내일 어때", day: "06.01.17:00" },
    { id: 2, name: "구은주", content: "좋앙", day: "06.01.17:30" },
    { id: 3, name: "ㅁㄴㅇ", content: "ㅁㄴㅇㅁㄴㅇ", day: "06.01.18:00" },
  ];

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
          <Link to="TotalPost">
            <Back>뒤로</Back>
          </Link>
          <Title>
            <div>{posts[1].h}</div>
            <div>{posts[1].t}</div>
            <div>{posts[1].d}</div>
          </Title>
        </Menu>
        <TT>
          <div>
            <Table>
              <tbody>
                <Tr>
                  <Td width="600">내용</Td>
                  <Td width="250">파일</Td>
                </Tr>
                <Tr>
                  <Td width="600" height="350">
                    {posts[1].content}
                  </Td>
                  <Td width="200" height="350"></Td>
                </Tr>
              </tbody>
            </Table>
            <Comments>
              {comments.map((comment) => {
                return (
                  <div>
                    <span>{comment.name}</span> <span>{comment.content}</span>
                    <span>{comment.day}</span>
                  </div>
                );
              })}
            </Comments>
            <Plus>+</Plus>
          </div>
        </TT>
      </Boxx>
    </Box>
  );
};

export default PostIn;
