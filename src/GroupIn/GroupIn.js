import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Boxx,
  Boxxx,
  Boxxxx,
  Menu,
  Post,
  Back,
  Report,
  AllPost,
  DayBar,
  Day,
  Plus,
  PlanBar,
  Plan,
} from "./Style";

const GroupIn = (props) => {
  let posts = [
    { id: 1, name: "어쩌구저쩌구" },
    { id: 2, name: "디자인하기" },
    { id: 3, name: "고양이 너무 귀여웡" },
  ];

  let plans = [
    { id: 7, day: "일", memo: "마라탕 먹기" },
    { id: 8, day: "월", memo: "" },
    { id: 9, day: "화", memo: "고양이랑 놀기" },
    { id: 10, day: "수", memo: "마라탕 먹기" },
    { id: 11, day: "목", memo: "" },
    { id: 12, day: "금", memo: "과제 하기" },
    { id: 13, day: "토", memo: "" },
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
          <Link to="Group">
            <Back>뒤로</Back>
          </Link>
          <Report>공지사항 | 캡스톤 디자인 프로젝트 개발하기</Report>
        </Menu>
        <AllPost>
          <Link to="/TotalPost">+ 게시글 전체보기</Link>
        </AllPost>
        <Boxxx>
          {posts.map((post) => {
            return <Post>{post.name}</Post>;
          })}
        </Boxxx>
        <Boxxxx>
          <DayBar>
            <Day>2020-06</Day>
            <Plus>+</Plus>
          </DayBar>
          <PlanBar>
            {plans.map((plan) => {
              return (
                <Plan>
                  {plan.id} {plan.day} {plan.memo}
                </Plan>
              );
            })}
          </PlanBar>
        </Boxxxx>
      </Boxx>
    </Box>
  );
};

export default GroupIn;
