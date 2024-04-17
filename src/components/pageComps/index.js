import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PageHeader = () => {
  const history = useHistory();
  const [render, setRender] = useState(true);
  return (
    <PageHeader1>
      {console.log(history.location.pathname)}
      <PageHeader1Space display={"flex"} flex={"1"} justifyContent={"space-between"} marginLeft={"20%"} marginRight={"20%"}>
        <PageHLetter
          active={history.location.pathname.slice(1) === "overview"}
          onClick={() => {
            history.push("overview");
            setRender(!render);
          }}
        >
          Overview
        </PageHLetter>
        <PageHLetter
          active={history.location.pathname.slice(1) === "explore"}
          onClick={() => {
            history.push("explore");
            setRender(!render);
          }}
        >
          Explore
        </PageHLetter>
        <PageHLetter
          active={history.location.pathname.slice(1) === "rankings"}
          onClick={() => {
            history.push("rankings");
            setRender(!render);
          }}
        >
          Rankings
        </PageHLetter>
        <PageHLetter
          active={history.location.pathname.slice(1) === "activities"}
          onClick={() => {
            history.push("activities");
            setRender(!render);
          }}
        >
          Activities
        </PageHLetter>
        <PageHLetter
          active={history.location.pathname.slice(1) === "Profile_empty"}
          onClick={() => {
            history.push("Profile_empty");
            setRender(!render);
          }}
        >
          Profile
        </PageHLetter>
      </PageHeader1Space>
    </PageHeader1>
  );
};

const PageHeader1Space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
`;

const PageHLetter = styled(Box)`
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #2ba55d;
  border-top: 4px solid transparent;
  border-top-color: ${(p) => (p.active ? "#2ba55d" : "transparent")};
  &:hover {
    border-top-color: #2ba55d;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

const PageHeader1 = styled(Box)`
  display: flex;
  width: 100%;
`;

export const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${({ ctheme, ltheme, dtheme }) => (ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main)};
`;

export default PageHeader;
