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
  CommentUp,
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
  ];

  let comments = [
    { id: 1, name: "전혜성", content: "내일 어때", day: "06.01.17:00" },
    { id: 2, name: "구은주", content: "좋앙", day: "06.01.17:30" },
    {
      id: 3,
      name: "전혜성",
      content: "상록수에서 만날까?",
      day: "06.01.18:00",
    },
    { id: 4, name: "전혜성", content: "중앙에서 만날까?", day: "06.01.18:01" },
    {
      id: 5,
      name: "구은주",
      content: "중앙에서 마라탕 먹자",
      day: "06.01.18:20",
    },
    { id: 6, name: "전혜성", content: "좋아 꿔바로우까지", day: "06.01.18:23" },
    { id: 7, name: "구은주", content: "ㅇㅋㅇㅋ", day: "06.01.18:25" },
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
                  <Td width="600" height="330">
                    {posts[1].content}
                  </Td>
                  <Td width="200" height="330"></Td>
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
            <CommentUp>
              <input
                type="text"
                name=""
                placeholder="댓글을 입력하세요."
              ></input>
            </CommentUp>
          </div>
        </TT>
      </Boxx>
    </Box>
  );
};

export default PostIn;
