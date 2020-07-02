import React from "react";
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
  Report,
  PostMenu,
  Plus,
  PostBar,
  Plan,
} from "./Style";

const TotalPost = () => {
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
      d: "1일 전",
      s: "4",
    },
    { id: 3, c: "", t: "", h: "", d: "", s: "" },
    { id: 4, c: "", t: "", h: "", d: "", s: "" },
    { id: 5, c: "", t: "", h: "", d: "", s: "" },
    { id: 6, c: "", t: "", h: "", d: "", s: "" },
    { id: 7, c: "", t: "", h: "", d: "", s: "" },
    { id: 8, c: "", t: "", h: "", d: "", s: "" },
    { id: 9, c: "", t: "", h: "", d: "", s: "" },
  ];

  return (
    <Box>
      <Boxx>
        <Menu>
          <Back>뒤로</Back>
          <Report>공지사항 | 캡스톤 디자인 프로젝트 개발하기</Report>
        </Menu>
        <TT>
          <div>
            <Table>
              <tbody>
                <Tr>
                  <Td width="95">번호</Td>
                  <Td width="95">카테고리</Td>
                  <Td width="400">제목</Td>
                  <Td width="95">작성자</Td>
                  <Td width="95">날짜</Td>
                  <Td width="95">조회수</Td>
                </Tr>
                {posts.map((post) => {
                  return (
                    <Tr>
                      <td>{post.id}</td>
                      <td>{post.c}</td>
                      <td>{post.t}</td>
                      <td>{post.h}</td>
                      <td>{post.d}</td>
                      <td>{post.s}</td>
                    </Tr>
                  );
                })}
              </tbody>
            </Table>
            <Plus>+</Plus>
          </div>
        </TT>
      </Boxx>
    </Box>
  );
};

export default TotalPost;
