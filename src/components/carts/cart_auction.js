/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Avatar, Box, styled as mstyled } from "@material-ui/core";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../../theme/theme";
import { useHistory } from "react-router";
import { IoMdWallet } from "react-icons/io";
import { BsHeartFill } from "react-icons/bs";


export const PageTitile = styled(Box).attrs({
  fontFamily: "Poppins",
  fontSize: [24, 40, 56, 72],
  fontWeight: "bold",
  lineHeight: [1.1, 1.2, 1.3, 1.4],
  color: "#131413",
  letterSpacing: "-0.5px",
})``;

export const PageTitileContent = styled(Box).attrs({
  fontFamily: "Poppins",
  fontSize: [14, 16, 18, 20],
  fontWeight: "300",
  lineHeight: [1.1, 1.2, 1.3, 1.4],
  letterSpacing: "0px",
  textAlign: "left",
})``;

export const HeaderCardBase = styled(Box).attrs({
  width: "316px",
  height: "236px",
})``;

export const HeaderCard = styled(HeaderCardBase).attrs({
  borderRadius: 8,
  overflow: "hidden",
})`
  img {
    width: 100%;
    height: 100%;
  }
`;

const CartAuction = ({ index, img, simg, simg1, title, seller, duration, sprice, eprice, ctheme, payment }) => {
  const history = useHistory();

  const price_format = (value) => {
    var temp = value;
    // if(payment === 'DUKE')
    // {
    //   temp = value / Math.pow(10,9);
    // }
    // else if(payment === 'FAST')
    // {
    //   temp = value / Math.pow(10,18);
    // }
    // else if(payment === 'BNB')
    // {
    //   temp = value / Math.pow(10,18);
    // }
    temp = value / Math.pow(10, 18);
    if (temp >= 0) {
      return temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    else {
      return temp;
    }
  }

  const duratoin_format = (value) => {
    let dur = value/(60*60*24);
    // let dur = value;
    let dur_str;

    if (parseInt(dur) === 1) {
      dur_str = dur + " day"
    }
    else if (parseInt(dur) <= 0){
      dur_str = "no date"
    }
    else{
      dur_str = dur + " days"
    }
    // else {
    //   dur_str = dur.toFixed(5) + " days"
    // }
    return dur_str;
  }
  
  const payment_type = (value) =>{
    let str;
    if(value == 0)
    {
      str = "BNB"
    }
    if(value == 1)
    {
      str = "FAST"
    }
    if(value == 2)
    {
      str = "DUKE"
    }
    return str;
  }

  return (
    <Box fontFamily={"Poppins"} background={"#FCFCFC"} border={"1px solid #CECECE"} borderRadius={"8px"} overflow={"hidden"}
      onClick={() => {
        history.push({ pathname: "/detail_page_auction", search: index.toString() });
      }}>
      <HeaderCardBase style={{background: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        {/* <img src={img} width={"100%"} height={"100%"} alt="" /> */}
      </HeaderCardBase>
      <HeaderCardBase position={"relative"} display={"flex"} flexDirection={"column"}>
        <MainCardAvatar>
          <img width={"100%"} height={"100%"} src={simg} alt="" />
          <Box position={"absolute"} top={"50%"} left={"100%"} bgcolor={"white"} padding={1} pl={"2px"} fontSize={18} fontWeight={500} lineHeight={1} color={"#131413"} borderRadius={"0 4px 4px 0px"}>
            homo sapien
          </Box>
        </MainCardAvatar>
        <Box flexGrow={1} px={3.5} pt={5} pb={3} display={"flex"} flexDirection={"column"}>
          <Box whiteSpace={"nowrap"} overflow={"hidden"} fontSize={24} lineHeight={1.3} fontWeight={"600"} color={"#131413"} textOverflow={"ellipsis"}>
            {title}
          </Box>
          <Box whiteSpace={"nowrap"} overflow={"hidden"} fontSize={12} lineHeight={1} color={"#2BA55D"} textOverflow={"ellipsis"} marginTop={"5px"}>
            {seller.slice(0, 7)} ... {seller.slice(-5)}
          </Box>
          <Box mt={"auto"} py={1} display={"flex"} gridGap={8}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box bgcolor={"#54DADE"} borderRadius={"100%"} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                <img width={"32px"} height={"32px"} src={simg1} alt="" />
              </Box>
              <Box fontSize={12} lineHeight={1} fontWeight={500} color={"#363936"}>
                {payment_type(payment)}
              </Box>
            </Box>
            <Box width={"1px"} bgcolor={"#CECECE"} />
            <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
              <Box fontSize={12} lineHeight={1} fontWeight={500} color={"#757B75"}>
                Last Bid
              </Box>
              <Box fontSize={20} lineHeight={1} fontWeight={600} color={"#131413"}>
              {price_format(sprice)} ~ {price_format(eprice)}
              </Box>
              <Box fontSize={14} lineHeight={1} fontWeight={500} color={"#757B75"}>
                $233.45
              </Box>
            </Box>
          </Box>
        </Box>
        <Box bgcolor={"#F8F8F8"} px={3} py={2} display={"flex"} alignItems={"center"}>
          <Box display={"flex"} alignItems={"center"} gridGap={4}>
            <Box fontSize={24} color={"#F16868"} display={"flex"} alignItems={"center"}>
              <BsHeartFill />
            </Box>
            <Box fontSize={14} fontWeight={500} lineHeight={1.4} color={"#757B75"} display={"flex"} alignItems={"center"}>
              {duratoin_format(duration)}
            </Box>
          </Box>
          <Box ml={"auto"} display={"flex"} alignItems={"center"} gridGap={4}>
            <Box fontSize={14} fontWeight={500} lineHeight={1.4} color={"#4E8EEE"} display={"flex"} alignItems={"center"}>
              Place a bid
            </Box>
            <Box fontSize={24} color={"#757B75"} display={"flex"} alignItems={"center"}>
              <IoMdWallet />
            </Box>
          </Box>
        </Box>
      </HeaderCardBase>
    </Box>
  );
};

const MainCardAvatar = styled(
  mstyled(Box)({
    position: "absolute",
    backgroundColor: "#FCFCFC",
    left: 24,
    top: 0,
    width: 56,
    height: 56,
    border: "3px solid #FCFCFC",
    borderRadius: "100%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  })
)`
  img {
    border-radius: 100%;
  }
  > div {
    display: none;
    filter: drop-shadow(5px 5px 10px #0005);
    transform: translate(20px, -50%);
    white-space: nowrap;
    &::before {
      content: "";
      position: absolute;
      right: calc(100% - 2px);
      top: 0px;
      background: white;
      width: 15px;
      height: 100%;
      clip-path: polygon(0 50%, 5% 40%, 70% 0, 100% 0, 100% 100%, 70% 100%, 5% 60%);
    }
  }
  &:hover > div {
    display: block;
  }
`;

const HCollection = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 400px;
  flex-direction: column;
  background: ${({ ctheme, ltheme, dtheme }) =>
    ctheme ? ltheme.bgcolor_bar : dtheme.bgcolor_bar};
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    margin-top: 5%;
  }
`;

export default CartAuction;
