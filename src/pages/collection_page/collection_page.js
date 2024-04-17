/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { FaTwitter, FaTelegram, FaShareAlt } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import cover_big1 from "../../images/cover/collection_header.png";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/small_duke1.png";
import cover4 from "../../images/cover/cover-4.png";
import cover5 from "../../images/cover/cover-5.png";
import cover6 from "../../images/cover/cover-6.png";
import cover7 from "../../images/cover/cover-7.png";
import cover8 from "../../images/cover/cover-8.png";
import cover9 from "../../images/cover/cover-9.png";
import cover10 from "../../images/cover/cover-10.png";
import cover11 from "../../images/cover/cover-11.png";
import bnb1 from "../../images/bnb1.png";
import BtnCustomize from "../../components/buttons/btn_container";
import Last_Drop from "../../components/carts/cart_drop";
import Img_Letter from "../../components/letters/img_letter";

const Collection_page = ({ ctheme }) => {
  return (
    <>
      <Show_Detail>
        <Box display="flex" flex="1" marginLeft="5%" marginTop="6%" flexDirection="column" marginRight="5%" position="relative">
          <Box display="flex" flex="210" width="100%">
            <img src={cover_big1} width="100%" height="210px"></img>
          </Box>
          <Box display="flex" flex="50" marginTop="10px">
            <Box display="flex" flex="3"></Box>
            <Box display="flex" flex="1" justifyContent="flex-start" alignItems="center">
              <Box marginRight="20px">
                <FaTwitter fontSize="20px" color="grey" />
              </Box>
              <Box marginRight="20px">
                <RiMessage3Fill fontSize="20px" color="grey" />
              </Box>
              <Box marginRight="20px">
                <FaTelegram fontSize="20px" color="grey" />
              </Box>
              <Box>
                <FaShareAlt fontSize="20px" color="grey" />
              </Box>
            </Box>
          </Box>
          <Box position="absolute" bottom="0px" left="10%" width="7%">
            <img src={small_ellipse} width="100%" height="80px"></img>
          </Box>
        </Box>
        <Box display="flex" flex="1"></Box>
        <Box display="flex" flex="1" marginLeft="5%" marginRight="5%" marginTop="1%">
          <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginLeft="5%">
            <Detail_Letter0 alignItems="flex-start" fontFamily="Poppins" fontSize="24px" fontWeight="600">
              <span>Collection name</span>
            </Detail_Letter0>
            <Detail_letter1 fontFamily="Poppins" fontSize="18px" color="#363936" lineheight="22px">
              <pre>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Placerat praesent in dictum <br />
                arcu consequat. Porttitor nisl enim dictum ut <br />
                non consectetur euismod. Aliquam lorem <br />
                neque, lobortis neque arcu.
              </pre>
            </Detail_letter1>
          </Box>
          <Box_Price1 display="flex" flex="1" justifyContent="center" alignItems="center">
            <Box_Letter1 width="80%" height="62px" border="1px solid #CECECE" borderRadius="8px">
              <Box_Letter2 display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Poppins" fontWeight="800">
                  7
                </Detail_letter2>
                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Poppins" color="#757B75">
                  Items
                </Detail_letter3>
              </Box_Letter2>
              <Box_Letter2 display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Poppins" fontWeight="800">
                  $9,251
                </Detail_letter2>
                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Poppins" color="#757B75">
                  Floor price
                </Detail_letter3>
              </Box_Letter2>
              <Box display="flex" flex="1.2" flexDirection="column">
                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Poppins" fontWeight="800">
                  <img src={bnb1} width="16px" height="16px" />
                  {"\u00a0"}424.1K
                </Detail_letter2>
                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Poppins" color="#757B75">
                  voL traded
                </Detail_letter3>
              </Box>
            </Box_Letter1>
          </Box_Price1>
        </Box>
      </Show_Detail>
      <Show_Items>
        <Box display="flex" marginLeft="5%" marginRight="5%" marginTop="2%" borderBottom="1px solid #CECECE" width="100%">
          <LItem marginRight="30px">Items</LItem>
          <LItem1>Activity</LItem1>
        </Box>
      </Show_Items>

      <Box display="flex" width="100%">
        <Box display="flex" marginLeft="5%" marginRight="5%" marginTop="3%" width="100%">
          <Box display="flex" flex="1" alignItems="center" marginRight="2%">
            <BtnCustomize color={"white"} back={"#2BA55D"} width={"100%"} height={"32px"} border={"1px solid #2BA55D"} str={"All 7"} borderRadius={"8px"} />
          </Box>
          <Tab_letter1 display="flex" flex="2" fontSize="14px" fontFamily="Poppins" fontWeight="600" alignItems="center" justifyContent="center" marginRight="2%">
            On auction 4
          </Tab_letter1>
          <Tab_letter1 display="flex" flex="1" fontSize="14px" fontFamily="Poppins" fontWeight="600" alignItems="center" marginRight="2%">
            Sold 3
          </Tab_letter1>
          <Tab_letter1 display="flex" flex="5"></Tab_letter1>
          <Box display="flex" flex="3" alignItems="center" justifyContent="flex-end">
            <BtnCustomize color={"#757B75"} back={"white"} width={"100%"} height={"32px"} border={"1px solid #757B75"} str={"Price - lowest"} borderRadius={"8px"} />
          </Box>
        </Box>
      </Box>
      <Part_Drop>
        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%">
          <Img_Letter letter={"Latest drops 🚀"} ctheme={ctheme} />
          <Box display="flex" flexDirection="column" marginTop="2%" width="100%">
            <Collection_Image display="flex" flex="1" marginBottom="2%" flexWrap={"wrap"}>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover4} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover5} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover6} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover7} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover8} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover9} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover10} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop img2={cover11} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} title={"This is demo"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
            </Collection_Image>
          </Box>
          <Box my="30px" display="flex" justifyContent="center">
            <BtnCustomize display="flex" color={"white"} back={"#2BA55D"} width={"230px"} height={"56px"} border={"1px solid #2BA55D"} str={"Explore more"} borderRadius={"8px"} />
          </Box>
        </Box>
      </Part_Drop>
    </>
  );
};

const Collection_Image = styled(Box)`
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Box_Price1 = styled(Box)`
  @media (max-width: 400px) {
    display: none !important;
  }
`;

const Tab_letter1 = styled(Box)`
  @media (max-width: 960px) {
    display: none !important;
  }
`;

const Detail_Letter0 = styled(Box)`
  @media (max-width: 1000px) {
    font-size: 20px !important;
  }
  @media (max-width: 600px) {
    font-size: 15px !important;
  }
`;

const Box_Letter1 = styled(Box)`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 120px !important;
  }
`;
const Box_Letter2 = styled(Box)`
  @media (max-width: 600px) {
    border-right: none !important;
    border-bottom: 1px solid #cecece !important;
  }
`;

const Detail_letter1 = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 15px !important;
  }
  @media (max-width: 1000px) {
    font-size: 12px !important;
  }
  @media (max-width: 1000px) {
    font-size: 10px !important;
  }
  @media (max-width: 600px) {
    font-size: 8px !important;
  }
`;

const Detail_letter2 = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 15px !important;
  }
  @media (max-width: 1000px) {
    font-size: 12px !important;
  }
  @media (max-width: 800px) {
    font-size: 9px !important;
  }
`;

const Detail_letter3 = styled(Box)`
  @media (max-width: 1200px) {
    font-size: 10px !important;
  }

  @media (max-width: 1000px) {
    font-size: 8px !important;
  }
`;

const Part_Drop = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 5%;
  flex-direction: column;
`;
const LItem = styled(Box)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #757b75;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    color: #2ba55d;
    border-bottom: 4px solid #2ba55d;
  }
`;

const LItem1 = styled(Box)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #757b75;
  border-bottom: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    color: #2ba55d;
    border-bottom: 4px solid #2ba55d;
  }
`;

const Show_Items = styled(Box)`
  width: 100%;
  display: flex;
`;

const Show_Detail = styled(Box)`
  width: 100%;
  display: flex;
  height: 520px;
  flex-direction: column;
`;

export default Collection_page;
