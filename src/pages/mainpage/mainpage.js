import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router";
import cover_big1 from "../../images/87.png";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/Duke.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";
import BtnCustomize from "../../components/buttons/btn_container";
import LastDrop from "../../components/carts/cart_drop";
import CartAuction from "../../components/carts/cart_auction";
import ImgLetter from "../../components/letters/img_letter";
import { lightTheme, darkTheme } from "../../theme/theme";

const Mainpage = ({ ctheme }) => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const { nfts } = useSelector((state) => state.product);
  const { auctions } = useSelector((state) => state.product1);
  useEffect(() => {
  });

  return (
    <>
      <PartHeader>
        <Box display="flex" flex="1" flexDirection="column" marginTop="5%" marginLeft="5%" marginRight="5%" height="460px">
          <Leftimgletter display="flex" flex="4" flexDirection="column" width="100%" fontSize="72px">
            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-end" fontWeight="bold" lineheight="80px" fontFamily="Poppins" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>
              Collect{" "}
            </Box>
            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="flex-start" fontWeight="bold" lineheight="80px" fontFamily="Poppins" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>
              Digital art
            </Box>
          </Leftimgletter>
          <Leftimgletter1 display="flex" flex="1" width="100%" fontSize="20px">
            <Box display="flex" justifyContent="flex-start" alignItems="center" fontFamily="Poppins" color={ctheme ? lightTheme.font_color_grey : darkTheme.font_color_grey}>
              Buy and Sell NFTs on Binance Smart Chain
            </Box>
          </Leftimgletter1>
          <Box display="flex" flex="4" justifyContent="flex-start" alignItems="flex-start" marginTop="5%" width="100%">
            <Box display="flex" width="40%" onClick={() => {
              history.push({ pathname: "/explore" });
            }}>
              <BtnCustomize display="flex" color={"white"} back={"#2BA55D"} width={"100%"} height={"56px"} border={"1px solid #2BA55D"} str={"Explore"} borderRadius={"8px"} />
            </Box>
            <Box
              display="flex"
              width="40%"
              onClick={() => {
                history.push({ pathname: "/Create_NFT" });
              }}
            >
              <BtnCustomize display="flex" color={"#2BA55D"} back={"white"} width={"100%"} height={"56px"} border={"1px solid #2BA55D"} str={"Create"} borderRadius={"8px"} marginL={"24px"} />
            </Box>
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" marginTop="5%" marginLeft="5%" marginRight="5%" border="1px solid #CECECE" borderRadius="24px" height="460px">
          <Box display="flex" flex="4" alignItems="center" width="100%"  style={{borderBottom: "1px solid #CECECE", background: `url(${cover_big1})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "24px 24px 0px 0px"}}>
          </Box>
          <Box display="flex" flex="1" width="100%" flexDirection="column" marginLeft="10%">
            <ImgUpLetter display="flex" flex="1" alignItems="flex-end">
              Gratification Corner
            </ImgUpLetter>
            <ImgDownLetter display="flex" flex="1" alignItems="flex-start">
              Bridge Connection
            </ImgDownLetter>
          </Box>
        </Box>
      </PartHeader>
      <Part2>
        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
          <ImgLetter letter={"Hot collections 🔥"} ctheme={ctheme} />
        </Box>
      </Part2>

      <Part2>
        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"} width={"100%"}>
          <ImgLetter letter={"Made by FastSwap"} ctheme={ctheme} />
          <BoxGadient marginTop={"2%"} justifyContent={"center"} alignItems={"center"}>
            Placeholder for FastSwap’s own collection
          </BoxGadient>
        </Box>
      </Part2>

      <PartDrop>
        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%">
          <ImgLetter letter={"Latest drops 🚀"} ctheme={ctheme} />
          <Box display="flex" marginTop="2%" marginBottom="2%" justifyContent="center">
            <GridShow display="grid" gridTemplateColumns="auto auto auto auto" gridGap="20px">
              {nfts.length > 0 &&
                nfts.map((item, index) => {
                  return (
                    <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
                      <LastDrop index={index} img2={item.img} simg={small_ellipse} title={item.title} simg1={item.payment_method === "DUKE" ? small_duke : item.payment_method === "FAST" ? icon_logo : item.payment_method === "BNB" ? bnb1 : ""} name={item.owner} price={`${item.price} `} ctheme={ctheme} payment={item.payment_method}></LastDrop>
                    </Box>
                  );
                })}
              {auctions.length > 0 &&
                auctions.map((item, index) => {
                  return (
                    <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
                      <CartAuction index={index} img={item.img} simg={small_ellipse} title={item.title} simg1={item.paymentType === '2' ? small_duke : item.paymentType === '1' ? icon_logo : item.paymentType === '0' ? bnb1 : ""} seller={item.seller} sprice={`${item.startingPrice} `} eprice={`${item.endingPrice} `} duration={item.duration} ctheme={ctheme} payment={item.paymentType}></CartAuction>
                    </Box>
                  );
                })}
            </GridShow>
          </Box>
          {/* <ImgLetter letter={"Auctions 🚀"} ctheme={ctheme} />
          <Box display="flex" marginTop="2%" justifyContent="center">
            <GridShow display="grid" gridTemplateColumns="auto auto auto auto" gridGap="20px">
              {auctions.length > 0 &&
                auctions.map((item, index) => {
                  // console.log(item)
                  return (
                    <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
                      <CartAuction index={index} img={item.img} simg={small_ellipse} title={item.title} simg1={item.paymentType === '2' ? small_duke : item.paymentType === '1' ? icon_logo : item.paymentType === '0' ? bnb1 : ""} seller={item.seller} sprice={`${item.startingPrice} `} eprice={`${item.endingPrice} `} duration={item.duration} ctheme={ctheme} payment={item.payment_method}></CartAuction>
                    </Box>
                  );
                })}
            </GridShow>
          </Box> */}
          <Box marginTop="5%" display="flex" justifyContent="center" marginBottom="5%">
            <BtnCustomize display="flex" color={"white"} back={"#2BA55D"} width={"230px"} height={"56px"} border={"1px solid #2BA55D"} str={"Explore more"} borderRadius={"8px"} />
          </Box>
        </Box>
      </PartDrop>
    </>
  );
};

const BoxGadient = styled(Box)`
  display: flex;
  width: 100%;
  height: 196px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  background: linear-gradient(88.83deg, rgba(157, 209, 178, 0.57) 0.54%, rgba(157, 209, 178, 0.19) 99.61%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
`
const Part2 = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 5%;
`
const ImgDownLetter = styled(Box)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #2BA55D;
`
const ImgUpLetter = styled(Box)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #131413;
`

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
const Leftimgletter = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 60px !important;
  }
  @media (max-width: 1000px) {
    font-size: 72px !important;
  }
  @media (max-width: 600px) {
    font-size: 50px !important;
  }
`;

const Leftimgletter1 = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 14px !important;
  }
  @media (max-width: 1000px) {
    font-size: 20px !important;
  }
  @media (max-width: 600px) {
    font-size: 14px !important;
  }
`;

const Imgdownletter = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 7px !important;
  }
  @media (max-width: 800px) {
    font-size: 12px !important;
  }
  @media (max-width: 600px) {
    font-size: 9px !important;
  }
`;

const Imgdownletter1 = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 10px !important;
  }
  @media (max-width: 800px) {
    font-size: 18px !important;
  }
  @media (max-width: 600px) {
    font-size: 12px !important;
  }
`;
const PartHeader = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom:5%;
  @media (max-width: 1000px) {
    flex-direction: column !important;
  }
`;
const PartDrop = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default Mainpage;
