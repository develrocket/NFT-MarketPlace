import React, { useState } from "react";
import { Box, Table, TableHead, TableBody, TableCell, TableRow, styled, Button } from "@material-ui/core";
import { CgSortAz } from "react-icons/cg";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaHandPaper, FaTag } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { IoSwapVerticalOutline } from "react-icons/io5";
import { VscLinkExternal } from "react-icons/vsc";
import { SimpleSwitch } from "../../components/elements/index";
import { lightTheme, darkTheme } from "../../theme/theme";

import NFTImage1 from "../../images/cover/cover-3.png";
import TokenImage from "../../images/small_duke1.png";
import { FillMdBtn, OutlineSmBtn } from "../../components/buttons";

const ActivitiesPage = ({ ctheme }) => {
  const [currentSubPage, setCurrentSubPage] = useState("Profile");
  const mainData = [
    {
      event: "Sale",
      nft: ["NFT name", "NFT name"],
      price: ["152.25 DUKE", "$234.88"],
      quantity: "1",
      from: "Josh",
      time: "1 Second ago",
    },
    {
      event: "Sale",
      nft: ["NFT name", "NFT name"],
      price: ["152.25 DUKE", "$234.88"],
      quantity: "1",
      from: "Josh",
      time: "1 Second ago",
    },
    {
      event: "Sale",
      nft: ["NFT name", "NFT name"],
      price: ["152.25 DUKE", "$234.88"],
      quantity: "1",
      from: "Josh",
      time: "1 Second ago",
    },
  ];
  const getIcon = (type) => {
    let result;
    switch (type) {
      case "Minted":
        result = MintedIcon;
        break;
      case "Listed":
        result = <FaTag />;
        break;
      case "Bid":
        result = <FaHandPaper />;
        break;
      case "Sale":
        result = <HiShoppingCart />;
        break;
      case "Transfer":
        result = <IoSwapVerticalOutline />;
        break;
      default:
        result = <AiFillQuestionCircle />;
        break;
    }
    return result;
  };
  return (
    <Box px={[6, 7, 9, 11]}>
      <Box mt={["20px", "40px", "60px", "64px"]} fontFamily={"Poppins"} fontSize={["20px", "26px", "34px"]} lineHeight={["20px", "30px", "34px"]} fontWeight={"bold"} color={"#131413"} letterSpacing={"0.5px"}>
        Activities
      </Box>
      <TypeSelector mt={3} />
      <Box mt={6} color={"#131413"}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell>NFT</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>From</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mainData.map((each, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box mr={1} fontSize={20}>
                      {getIcon(each.event)}
                    </Box>
                    <Box fontSize={18} lineHeight={1}>
                      {each.event}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box mr={1} borderRadius={8} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                      <img height={"40px"} src={NFTImage1} alt="" />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500}>
                        {each.nft[0]}
                      </Box>
                      <Box mt={0.5} fontSize={[10, 10, 12, 12]} fontWeight={500} color={"#2BA55D"}>
                        {each.nft[1]}
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box mr={1} bgcolor={"#54DADE"} borderRadius={"100%"} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                      <img width={"32px"} height={"32px"} src={TokenImage} alt="" />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Box fontSize={[10, 12, 14, 16]} fontWeight={500} color={"#131413"}>
                        {each.price[0]}
                      </Box>
                      <Box mt={0.5} fontSize={[10, 10, 12, 12]} fontWeight={500} color={"#757B75"}>
                        {each.price[1]}
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box fontSize={18} lineHeight={1}>
                    {each.quantity}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={"#2BA55D"}>
                    {each.from}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={"#2BA55D"} display={"flex"} alignItems={"center"} gridColumnGap={10}>
                    {each.time}
                    <VscLinkExternal />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box mt={[2, 3, 4, 5]} display={"flex"} justifyContent={"center"}>
        <OutlineSmBtn>Load more</OutlineSmBtn>
      </Box>
    </Box>
  );
};

const MintedIcon = (
  <svg width="1em" height="1.5em" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.68899 4.53987C10.7545 3.97349 11.4775 2.8904 11.4775 1.64844V1.33184C11.4775 1.14842 11.3214 1 11.1289 1C10.6231 1 10.3552 1.18893 10.1399 1.34091C9.96023 1.46762 9.8416 1.55123 9.56607 1.55123C9.29002 1.55123 9.17106 1.46762 8.99117 1.34059C8.77589 1.18893 8.50784 1 8.0017 1C7.49556 1 7.22735 1.18893 7.01189 1.34059C6.83183 1.46729 6.71287 1.55123 6.43648 1.55123C6.1601 1.55123 6.04114 1.46729 5.86108 1.34059C5.64562 1.18893 5.3774 1 4.87126 1C4.67878 1 4.52272 1.14842 4.52272 1.33184V1.64844C4.52272 2.89036 5.24566 3.97349 6.31108 4.53987C3.26599 5.26212 1 7.88028 1 10.9998C1 14.1194 3.26601 16.7378 6.3111 17.4601C5.24568 18.0265 4.52272 19.1096 4.52272 20.3516V20.6682C4.52272 20.8516 4.67878 21 4.87126 21C5.37689 21 5.64477 20.8111 5.86006 20.6591C6.03978 20.5324 6.1584 20.4488 6.4341 20.4488C6.71015 20.4488 6.82894 20.5324 7.00866 20.6591C7.22411 20.8111 7.49216 21 7.9983 21C8.50461 21 8.77282 20.8111 8.98828 20.6594C9.16834 20.5324 9.28713 20.4488 9.56352 20.4488C9.8399 20.4488 9.95886 20.5324 10.1389 20.6594C10.3544 20.8111 10.6226 21 11.1289 21C11.3214 21 11.4775 20.8516 11.4775 20.6682V20.3516C11.4775 19.1096 10.7545 18.0265 9.68897 17.4601C12.734 16.7378 15 14.1194 15 10.9998C15 7.88028 12.7341 5.26216 9.68899 4.53987ZM9.42715 16.8397C8.96775 16.9416 8.49146 17.0008 8 17.0008C6.47412 17.0008 5.07362 16.4814 3.98199 15.6191C5.07453 15.2709 7.36671 14.2454 8.18989 11.637C10.2277 13.7112 9.61279 16.241 9.42715 16.8397ZM7.81286 10.3601C5.77769 8.28851 6.38858 5.76246 6.57502 5.15971C7.03374 5.0582 7.50931 4.99922 8 4.99922C9.5252 4.99922 10.9252 5.51812 12.0166 6.37964C10.9224 6.72913 8.63508 7.75535 7.81286 10.3601ZM5.22117 1.73302C5.29725 1.76899 5.36566 1.81728 5.4465 1.87431C5.66196 2.02597 5.93017 2.2149 6.43648 2.2149C6.94279 2.2149 7.21101 2.02597 7.42647 1.87431C7.60653 1.74728 7.72532 1.66367 8.0017 1.66367C8.27775 1.66367 8.39671 1.74728 8.5766 1.87431C8.79188 2.02597 9.05993 2.2149 9.56607 2.2149C10.0717 2.2149 10.3396 2.02597 10.5549 1.87399C10.6352 1.81728 10.7034 1.76932 10.779 1.73335C10.7317 3.1537 9.50327 4.29536 8 4.29536C6.49673 4.29536 5.26831 3.1537 5.22117 1.73302ZM5.80679 5.38153C5.57784 6.45996 5.36972 8.85634 7.32612 10.8347C4.41401 11.4788 2.41822 9.69825 1.97201 9.25044C2.5459 7.46175 3.9775 6.03111 5.80679 5.38153ZM1.79229 9.99776C2.65699 10.725 4.73237 12.097 7.51205 11.4739C6.64158 14.1937 4.03607 14.9492 3.40444 15.0937C2.34893 14.0203 1.69709 12.5828 1.69709 10.9998C1.69709 10.6577 1.73425 10.3244 1.79229 9.99776ZM10.779 20.267C10.7029 20.231 10.6343 20.1827 10.5535 20.1257C10.338 19.974 10.0698 19.7851 9.56352 19.7851C9.05738 19.7851 8.78916 19.974 8.5737 20.1257C8.39364 20.2527 8.27468 20.3363 7.9983 20.3363C7.72208 20.3363 7.60329 20.2527 7.4234 20.1257C7.20812 19.974 6.94007 19.7851 6.4341 19.7851C5.9283 19.7851 5.66043 19.974 5.44514 20.126C5.36481 20.1827 5.29673 20.2307 5.22117 20.2663C5.26865 18.8463 6.4969 17.7046 8 17.7046C9.50327 17.7046 10.7319 18.8463 10.779 20.267ZM10.1957 16.6176C10.4248 15.5402 10.6343 13.1421 8.67652 11.1624C11.5852 10.5188 13.58 12.295 14.0291 12.7453C13.4563 14.5352 12.0251 15.9672 10.1957 16.6176ZM14.2083 11.998C13.3422 11.2703 11.2675 9.90087 8.49072 10.5231C9.35927 7.81012 11.9545 7.05178 12.5941 6.90473C13.6505 7.97822 14.3029 9.41632 14.3029 10.9998C14.3029 11.3406 14.2659 11.6726 14.2083 11.998Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);
const ListItemBox = styled(Box)({ cursor: "pointer", gridGap: "16px", "&:hover": { background: "#F2F2F2" } });

const TypeSelector = ({ mt }) => {
  const typeData = [
    {
      checked: false,
      icon: MintedIcon,
      name: "Minted",
    },
    {
      checked: true,
      icon: <FaTag />,
      name: "Listed",
    },
    {
      checked: true,
      icon: <FaHandPaper />,
      name: "Bid",
    },
    {
      checked: false,
      icon: <HiShoppingCart />,
      name: "Sale",
    },
    {
      checked: false,
      icon: <IoSwapVerticalOutline />,
      name: "Transfer",
      rotate: -45,
    },
  ];
  const [isCollapse, setCollapse] = useState(true);
  return (
    <Box mt={mt} display={"flex"} flexDirection={"column"} border={isCollapse ? "" : "1px solid #CECECE"} borderRadius={8}>
      <Box display={"flex"} alignItems={"stretch"}>
        <Box px={2} py={2} display={"flex"} alignItems={"center"}>
          <SimpleSwitch />
        </Box>
        <Box
          flexGrow={1}
          pr={2}
          display={"flex"}
          alignItems={"center"}
          css={{ cursor: "pointer", gridGap: "10px" }}
          onClick={() => {
            setCollapse(!isCollapse);
          }}
        >
          <Box fontSize={28} color={"#363936"} display={"flex"} alignItems={"center"}>
            <CgSortAz />
          </Box>
          <Box mr={"auto"} fontFamily={"Poppins"} fontSize={["12px", "16px", "18px"]} lineHeight={["20px", "30px", "34px"]} fontWeight={"normal"} color={"#01070B"} letterSpacing={"0.5px"}>
            Types
          </Box>
          <Box fontSize={24} color={"#363936"} display={"flex"} alignItems={"center"} css={{ transform: `rotate(${isCollapse ? `0deg` : `180deg`})` }}>
            <TiArrowSortedDown />
          </Box>
        </Box>
      </Box>
      <Box maxHeight={isCollapse ? "0px" : "600px"} overflow={"hidden"} css={{ transition: "300ms" }}>
        <Box borderTop={"1px solid #CECECE"} borderBottom={"1px solid #CECECE"}>
          {typeData.map((each, index) => (
            <ListItemBox key={index} px={2} py={2} display={"flex"} alignItems={"center"}>
              <Box fontSize={20} px={"10px"} color={each.checked ? "#2BA55D" : "transparent"}>
                <BsCheckCircleFill />
              </Box>
              <Box fontSize={20} color={"#363936"} css={{ transform: `rotate(${each.rotate}deg)` }}>
                {each.icon}
              </Box>
              <Box color={"#363936"} fontFamily={"Poppins"}>
                {each.name}
              </Box>
            </ListItemBox>
          ))}
        </Box>
        <Box px={2} py={2} display={"flex"} alignItems={"center"} css={{ cursor: "pointer", gridGap: "16px" }}>
          <Box ml={"auto"} px={3} py={0.5} bgcolor={"transparent"} border={"1px solid #2BA55D"} borderRadius={6} lineHeight={1} color={"#2BA55D"} css={{ cursor: "pointer" }}>
            Clear
          </Box>
          <Box px={3} py={0.5} bgcolor={"#2BA55D"} border={"1px solid #2BA55D"} borderRadius={6} lineHeight={1} color={"white"} css={{ cursor: "pointer" }}>
            Apply
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivitiesPage;
