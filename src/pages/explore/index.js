import React, { useState } from "react";
import { useSelector } from "react-redux";
import styledComp from "styled-components";
import { Box, styled, Button } from "@material-ui/core";
import { TiArrowSortedDown } from "react-icons/ti";
import { SimpleSwitch } from "../../components/elements/index";
import { DropDown, DropDownItem } from "../../components/elements/dropdown";
import LastDrop from "../../components/carts/cart_drop";
import CartAuction from "../../components/carts/cart_auction";
import { PageTitile, PageTitileContent, HeaderCard, HeaderCardBase, MainCard } from "./index.component";
import { FillMdBtn } from "../../components/buttons";
import cover_big1 from "../../images/cover/cover_big1.png";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/Duke.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";

const CardImages = [require("../../images/explore/1.png").default, require("../../images/explore/2.png").default, require("../../images/explore/3.png").default, require("../../images/explore/4.png").default, require("../../images/explore/5.png").default, require("../../images/explore/6.png").default, require("../../images/explore/7.png").default, require("../../images/explore/8.png").default, require("../../images/explore/9.png").default, require("../../images/explore/10.png").default, require("../../images/explore/11.png").default, require("../../images/explore/12.png").default, require("../../images/explore/13.png").default];

const ExplorePage = ({ ctheme }) => {
  const { nfts } = useSelector((state) => state.product);
  const { auctions } = useSelector((state) => state.product1);

  return (
    <Box alignSelf={"center"} px={[6, 7, 9, 11]}>
      <Box mt={6} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        <HeaderCardBase>
          <PageTitile>Explore</PageTitile>
          <PageTitileContent>Buy the finest NFT’s on Binance Smart Chain</PageTitileContent>
        </HeaderCardBase>
        <HeaderCard>
          <img src={CardImages[0]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[1]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[2]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[3]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[4]} alt="" />
        </HeaderCard>
        {/* <HeaderCard>
          <img src={CardImages[5]} alt="" />
        </HeaderCard>
        <HeaderCard>
          <img src={CardImages[6]} alt="" />
        </HeaderCard> */}
        <HeaderCard />
        <HeaderCard />
        <HeaderCard />
        <HeaderCard />
      </Box>
      <Box mt={[2, 4, 6, 8]} display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"} gridGap={24}>
        <TypeSelector>Sale type</TypeSelector>
        <TypeSelector mr="auto">Price</TypeSelector>
        <DropDown text={"Recently Added"} color="#757B75">
          <DropDownItem>Select option-1</DropDownItem>
          <DropDownItem>Select option-2</DropDownItem>
          <DropDownItem>Select option-3</DropDownItem>
        </DropDown>
      </Box>
      {/* <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </Box> */}

      <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        {nfts.length > 0 &&
          nfts.map((item, index) => {
            return (

              <LastDrop index={index} img2={item.img} simg={small_ellipse} title={item.title} simg1={item.payment_method === "DUKE" ? small_duke : item.payment_method === "FAST" ? icon_logo : item.payment_method === "BNB" ? bnb1 : ""} name={item.owner} price={`${item.price} `} ctheme={ctheme} payment={item.payment_method}></LastDrop>
            );
          })}
        {auctions.length > 0 &&
          auctions.map((item, index) => {
            return (
              <CartAuction index={index} img={item.img} simg={small_ellipse} title={item.title} simg1={item.paymentType === '2' ? small_duke : item.paymentType === '1' ? icon_logo : item.paymentType === '0' ? bnb1 : ""} seller={item.seller} sprice={`${item.startingPrice} `} eprice={`${item.endingPrice} `} duration={item.duration} ctheme={ctheme} payment={item.paymentType}></CartAuction>
            );
          })}
        <HeaderCard />
        <HeaderCard />
        <HeaderCard />
      </Box>

      <Box mt={6} mb={9} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
        <FillMdBtn variant="contained">Load more</FillMdBtn>
      </Box>
    </Box >
  );
};

const GridShow = styled(Box)`
  @media (max-width: 1800px) {
    grid-template-columns: auto auto auto!important;
  }
  @media (max-width: 1385px) {
    grid-template-columns: auto auto !important;
  }
  @media (max-width: 1022px) {
    grid-template-columns: auto!important;
  }

  /* @media (max-width: 1600px) {
        grid-template-columns:auto auto auto auto;

    }
    @media (max-width: 1600px) {
        grid-template-columns:auto auto auto auto;

    }
    @media (max-width: 1600px) {
        grid-template-columns:auto auto auto auto;
    } */
`;

const NormalBtn = styledComp(
  styled(Button)({
    backgroundColor: "#2BA55D",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    textTransform: "initial",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 48,
    paddingRight: 48,
    "&:hover": {
      backgroundColor: "#3FBF6F",
    },
  })
)``;

const TypeSelector = ({ mt, mr }) => {
  const [isCollapse, setCollapse] = useState(true);
  return (
    <Box mt={mt} mr={mr} position={"relative"} display={"flex"} flexDirection={"column"} border={"1px solid #CECECE"} borderRadius={8}>
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
          <Box mr={"auto"} fontFamily={"Poppins"} fontSize={["12px", "16px", "18px"]} lineHeight={["20px", "30px", "34px"]} fontWeight={"normal"} color={"#01070B"} letterSpacing={"0.5px"}>
            Types
          </Box>
          <Box fontSize={24} color={"#363936"} display={"flex"} alignItems={"center"} css={{ transform: `rotate(${isCollapse ? `0deg` : `180deg`})` }}>
            <TiArrowSortedDown />
          </Box>
        </Box>
      </Box>
      <Box position={"absolute"} top={"100%"} bgcolor={"white"} maxHeight={isCollapse ? "0px" : "100vh"} overflow={"hidden"} css={{ transition: "300ms" }}>
        <Box border={"1px solid #CECECE"} borderRadius={8}>
          <Box px={2} py={2} display={"flex"} alignItems={"center"}>
            <Box color={"#363936"} fontFamily={"Poppins"}>
              {"each.name"}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExplorePage;
