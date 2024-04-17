import React, { useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../../theme/theme";
import ProfileContent from "./profile.jsx";
import Notification from "./notification";
import Offer from "./offer";
import Support from "./support";

const SettingPage = ({ ctheme }) => {
  const [currentSubPage, setCurrentSubPage] = useState("Profile");
  return (
    <>
      <PageTitle>Settings</PageTitle>
      <SettingTap>
        <SettingTapBtn
          selected={currentSubPage === "Profile"}
          onClick={() => {
            setCurrentSubPage("Profile");
          }}
        >
          Profile
        </SettingTapBtn>
        <SettingTapBtn
          selected={currentSubPage === "Notifications"}
          onClick={() => {
            setCurrentSubPage("Notifications");
          }}
        >
          Notifications
        </SettingTapBtn>
        <SettingTapBtn
          selected={currentSubPage === "Offers"}
          onClick={() => {
            setCurrentSubPage("Offers");
          }}
        >
          Offers
        </SettingTapBtn>
        <SettingTapBtn
          selected={currentSubPage === "Support"}
          onClick={() => {
            setCurrentSubPage("Support");
          }}
        >
          Support
        </SettingTapBtn>
      </SettingTap>
      <SettingTapContent>
        {currentSubPage === "Support" && <Support />}
        {currentSubPage === "Offers" && <Offer />}
        {currentSubPage === "Notifications" && <Notification />}
        {currentSubPage === "Profile" && <ProfileContent />}
      </SettingTapContent>
    </>
  );
};

const StyledContainer = styled(Box)`
  position: relative;
  background: ${({ ctheme, ltheme, dtheme }) => (ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Header1 = styled(Box)`
  display: flex;
  width: 100%;
`;
const Header1space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
`;
const HLetter = styled(Box)`
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
  &:hover {
    border-top: 4px solid #2ba55d;
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
const PageTitle = styled.h4`
  margin-top: 64px;
  margin-bottom: 0px;
  margin-right: 5%;
  margin-left: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 34px;
  letter-spacing: 0.5px;
  color: #131413;
  @media (max-width: 1000px) {
    font-size: 34px;
    line-height: 34px;
    margin-top: 60px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
    line-height: 30px;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 20x;
    margin-top: 20px;
  }
`;
const SettingTap = styled(Box)`
  margin-top: 42px;
  margin-right: 5%;
  margin-left: 5%;
  border-bottom: 1px solid #cecece;
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  @media (max-width: 1000px) {
    font-size: 34px;
    line-height: 34px;
    margin-top: 60px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
    line-height: 30px;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    line-height: 20x;
    margin-top: 20px;
  }
`;
const SettingTapBtn = styled.button`
  background: transparent;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 3px solid ${(p) => (p.selected ? "#2BA55D" : "transparent")};
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: ${(p) => (p.selected ? "#2BA55D" : "#757B75")};
  cursor: pointer;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
const SettingTapContent = styled(Box)`
  margin-top: 40px;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 1000px) {
    margin-top: 40px;
  }
  @media (max-width: 800px) {
    margin-top: 32px;
  }
  @media (max-width: 600px) {
    margin-top: 16px;
  }
`;

export default SettingPage;
