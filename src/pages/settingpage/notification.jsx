import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { MdSave } from "react-icons/md";
import AvatarImage from "../../images/small_ellipse2.png";
import { BsFillCaretDownFill } from "react-icons/bs";
import { SimpleSwitch } from "../../components/elements";

const Notification = () => {
  return (
    <>
      <Header>
        <Box fontSize="18px" lineheight="20px" fontFamily="Poppins">
          Select which notifications you would like to receive for 0x2ce5...c081
        </Box>
      </Header>
      <NotificationMain pb="80px">
        <Box className="mainList" borderRadius="16px" border="1px solid #cecece">
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <NotificationItem mb="20px" display="flex" flexDirection="column">
            <Box fontSize="20px" lineheight="20px" fontWeight="600" letterSpacing="0.5px">
              Item Sold
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box mt="9px" fontSize="12px" lineheight="12px" color="#757B75;">
                When someone purchased one of your items
              </Box>
              <SimpleSwitch defaultChecked />
            </Box>
          </NotificationItem>
          <BottomInforBox border="1px solid #CECECE" borderRadius="8px" display="flex">
            <Box height="40px" px="20px" fontSize="18px" lineheight="20px" textAlign="center" color="#757B75" display="flex" alignItems="center" justifyContent="center" gridColumnGap="10px" style={{ textTransform: "uppercase" }}>
              <img src={AvatarImage} alt="" style={{ width: "24px", height: "24px", borderRadius: "100%" }} />
              <span>duke</span>
              <BsFillCaretDownFill />
            </Box>
            <Box flexGrow="1" width="150px" height="40px" pl="20px" fontSize="12px" lineheight="12px" textAlign="center" color="#757B75" display="flex" alignItems="center" justifyContent="flex-start">
              1000
            </Box>
          </BottomInforBox>
        </Box>
        <Box marginTop={["0px", "25px", "32px", "42px"]} bgcolor="#2BA55D" borderRadius="8px" fontFamily="Poppins" fontSize="18px" lineheight="18px" textAlign="center" paddingY="19px" color="white" display="flex" justifyContent="center" alignItems="center" gridColumnGap="11px" sx={{ cursor: "pointer" }}>
          <MdSave fontSize="20px" />
          Save
        </Box>
      </NotificationMain>
    </>
  );
};

const Header = styled(Box)`
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 40px;
    margin-bottom: 40px;
    @media (max-width: 1000px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    @media (max-width: 800px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
const NotificationMain = styled(Box)`
  max-width: 617px;
  display: flex;
  flex-direction: column;
  gap: 39px;
  > div.mainList {
    padding: 60px;
    @media (max-width: 1000px) {
      padding: 60px;
    }
    @media (max-width: 800px) {
      padding: 30px;
    }
    @media (max-width: 600px) {
      padding: 16px;
    }
  }
`;
const BottomInforBox = styled(Box)`
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: row;
    > div:last-child {
      border-left: 1px solid #cecece;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    > div:last-child {
      border-top: 1px solid #cecece;
      width: 100%;
      box-sizing: border-box;
    }
  }
  @media (max-width: 600px) {
    > div:last-child {
      border-top: 1px solid #cecece;
      width: 100%;
      box-sizing: border-box;
    }
    flex-direction: column;
  }
`;
const NotificationItem = styled(Box)`
  margin-bottom: 39px;
  @media (max-width: 1000px) {
    margin-bottom: 39px;
    > div:first-child {
      font-size: 20px;
    }
    > div:nth-child(2) {
      margin-top: 8px;
      font-size: 12px;
    }
  }
  @media (max-width: 800px) {
    margin-bottom: 25px;
    > div:first-child {
      font-size: 16px;
    }
    > div:nth-child(2) {
      margin-top: 4px;
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 12px;
    > div:first-child {
      font-size: 12px;
    }
    > div:nth-child(2) > * {
      margin-top: 0px;
      font-size: 8px;
    }
  }
`;

export default Notification;
