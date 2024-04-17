/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */

import React, { useEffect, useMemo, useState } from "react";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/Duke.png";
import bnb1 from "../../images/bnb1.png";
import cover4 from "../../images/cover/cover-4.png";
import cover5 from "../../images/cover/cover-5.png";
import cover6 from "../../images/cover/cover-6.png";
import cover7 from "../../images/cover/cover-7.png";
import icon_logo from "../../images/icon_logo.png";
import detail_chart1 from "../../images/detail_chart1.png";
import BtnCustomize from "../../components/buttons/btn_container";
import Last_Drop from "../../components/carts/cart_drop";
import List_ULetter from "../../components/letters/list_uletter";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { NFT_MARKETPLACE_ABI, NFT_ABI, FAST_TOKEN_ABI } from "../../utils/abi";
import { CONTRACTS } from "../../utils/constants";
import { ethers } from "ethers";

const Detail_Page = ({ ctheme }) => {
  const history = useHistory();
  const nftsIndex = parseInt(history.location.search.slice(1));
  const { nfts } = useSelector((store) => store.product);
  const mainData = nfts[nftsIndex];
  const { account, library } = useWeb3React();
  const nftContract = useMemo(() => (library ? new ethers.Contract(CONTRACTS.NFT, NFT_ABI, library.getSigner()) : null), [library]);
  const marketplaceContract = useMemo(() => (library ? new ethers.Contract(CONTRACTS.MARKETPLACE, NFT_MARKETPLACE_ABI, library.getSigner()) : null), [library]);
  // const auctionContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.AUCTION_HALL, NFT_AUCTION_ABI, library.getSigner()) : null, [library])
  const fastContract = useMemo(() => (library ? new ethers.Contract(CONTRACTS.FAST_TOKEN, FAST_TOKEN_ABI, library.getSigner()) : null), [library]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  // const [type_trans, set_trans] = useState(false);

  const [process, set_process] = useState("Processing...");
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log("------------------------");
    // console.log(nfts);
  });
  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: 250,
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    backgroundColor: "#2BA55D",
    border: "none",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins",
  };

  if (mainData === undefined || mainData === null) {
    history.push("/");
    return <></>;
  }
  const handleBuyNow = async () => {
    handleOpen();
    try {
      const price = "0x" + parseInt(mainData.price).toString(16);
      const approve = await fastContract.approve(CONTRACTS.MARKETPLACE, price);
      await approve.wait();
      //const approve1 = await nftContract.approve(CONTRACTS.MARKETPLACE, mainData.ids);
      // await approve1.wait();
      // console.log(mainData.price)
      // console.log(price)
      let buy = await marketplaceContract.buy(mainData.ids, price);
      await buy.wait();
      set_process("Baught successfully.");
      setTimeout(() => {
        history.push({ pathname: "/" });
        set_process("Processing...");
        window.location.reload();
        handleClose();
      }, 2000);

      // .then((res) => {
      //   set_process("Baught successfully.");
      //   setTimeout(() => {
      //     history.push({ pathname: "/" });
      //     set_process("Processing...");
      //     window.location.reload();
      //     handleClose();
      //   }, 2000);

      // }).catch((error) => {
      //   console.log(error)
      //   set_process("Fault! Try again.");
      //   setTimeout(() => {
      //     set_process("Processing...");
      //     handleClose();
      //   }, 2000);
      // });
    } catch (error) {
      set_process("Fault! Try again.");
      setTimeout(() => {
        set_process("Processing...");
        handleClose();
        // set_trans(false);
      });
      console.log(error);
    }
  };
  const price_format = (payment, value) => {
    var temp = value;
    if (payment === "DUKE") {
      temp = value / Math.pow(10, 18);
    } else if (payment === "FAST") {
      temp = value / Math.pow(10, 18);
    } else if (payment === "BNB") {
      temp = value / Math.pow(10, 18);
    }
    if (temp >= 0) {
      return temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    } else {
      return temp;
    }
  };
  return (
    <>
      <Box display="flex" width="100%" marginTop="5%">
        <Detail_Img display="flex" marginLeft="5%" marginRight="5%" width="100%">
          <Box display="flex" flex="4" borderRadius="8px">
            <img src={mainData.img} width="100%" height="100%" borderradius="8px"></img>
          </Box>
          <Box display="flex" flex="5" justifyContent="center">
            <Box display="flex" flexDirection="column" width="90%">
              <Box display="flex" flex="1" alignItems="center">
                <Box display="flex" mt={["10px", "20px"]} flex="1" justifyContent="flex-start" fontFamily="Poppins" fontWeight="500" fontSize={["14px", "18px"]} color="#2BA55D">
                  Collection name
                </Box>
                <Box display="flex" flex="1" justifyContent="flex-end">
                  <FaShareAlt fontSize="18px" color="#757B75"></FaShareAlt>
                </Box>
              </Box>
              <Box display="flex" flex="2" flexDirection="column" marginTop="2%">
                <Img_Title1 display="flex" flex="1" fontFamily="Poppins" fontWeight="800" fontSize={["20px", "30px", "34px"]} color="#363936" lineHeight={["20px", "30px", "40px"]} alignItems="center">
                  {/* NFT artwork titleNFT */}
                  {mainData.title}
                </Img_Title1>
                <Img_Title1 display="flex" flex="1" fontFamily="Poppins" fontWeight="800" fontSize={["20px", "30px", "34px"]} color="#363936" lineHeight={["20px", "30px", "40px"]} alignItems="center">
                  artwork title
                </Img_Title1>
              </Box>
              <Box display="flex" flex="1" alignItems="center" marginTop="2%">
                <Box display="flex" flex="60" alignItems="center" justifyContent="center" fontFamily="Poppins" fontSize="12px" fontWeight="400" color="#757B75">
                  Owned by{" "}
                </Box>
                <Box display="flex" flex="75" alignItems="center" justifyContent="center" fontFamily="Poppins" fontSize="12px" fontWeight="400" color="#2BA55D">
                  User's name
                </Box>
                <Box display="flex" flex="95" alignItems="center" justifyContent="center" fontFamily="Poppins" fontSize="12px" fontWeight="400" color="#757B75">
                  <MdRemoveRedEye fontSize="20px" />
                  {"\u00a0"}2.4 K views
                </Box>
                <Box display="flex" flex="95" alignItems="center" justifyContent="center" fontFamily="Poppins" fontSize="12px" fontWeight="400" color="#757B75">
                  <FaHeart fontSize="20px" color="#F16868" />
                  {"\u00a0"}201 favorited
                </Box>
                {/* <Box display="flex" flex="100" alignItems="center" justifyContent="center" fontFamily="Poppins" fontSize="12px" fontWeight="500" color=""></Box> */}
              </Box>
              <Box display="flex" flex="2" flexDirection="column" marginTop="2%">
                <Box display="flex" flex="1" alignItems="center" marginTop="1%">
                  <Box display="flex" alignItems="center" flex="1" >
                    <Box display="flex" flexDirection="column" alignItems="center" marginRight="3%">
                      <Box display="flex" flex="3" width="50px" height="50px" border="1px solid #CECECE" borderRadius="100%" >
                        <img src={mainData.payment_method === "DUKE" ? small_duke : mainData.payment_method === "FAST" ? icon_logo : mainData.payment_method === "BNB" ? bnb1 : ""} width="100%" height="100%" alt="" />
                      </Box>
                      <Box display="flex" flex="1" justifyContent="center" alignItems="center" fontFamily="Poppins" fontSize="18px" fontWeight="500" color="#131413">
                        {
                          mainData.payment_method === "DUKE" ? "DUKE" : mainData.payment_method === "FAST" ? "FAST" : mainData.payment_method === "BNB" ? "BNB" : ""
                        }
                      </Box>
                    </Box>
                    <Box display="flex" flex="3" flexDirection="column" borderLeft="1px solid #CECECE">
                      <Box display="flex" justifyContent="flex-start" alignItems="center" marginLeft="10px" fontFamily="Poppins" fontSize="18px" fontWeight="400" color="#757B75">
                        Buy Now
                      </Box>
                      <Box display="flex" justifyContent="flex-start" alignItems="center" marginLeft="10px" fontFamily="Poppins" fontSize={["18px", "24px"]} fontWeight="500" color="#131413">
                        {price_format(mainData.payment_method, mainData.price)}
                        {/* 200.1 FAST */}
                      </Box>
                      <Box display="flex" justifyContent="flex-start" alignItems="center" marginLeft="10px" fontFamily="Poppins" fontSize="14px" fontWeight="400" color="#757B75">
                        $4.05
                      </Box>
                    </Box>
                  </Box>

                </Box>
              </Box>
              <Box display="flex" flex="2" marginTop="1%">
                <Box display="flex" flex="1" justifyContent="flex-start" marginRight="1%">
                  <BtnCustomize
                    flexGrow={1}
                    marginTop={"20px"}
                    color={"white"}
                    back={"#2BA55D"}
                    width={"100%"}
                    height={"50px"}
                    border={"1px solid #2BA55D"}
                    str={"Buy now"}
                    borderRadius={"8px"}
                    onClick={() => {
                      handleBuyNow();
                    }}
                  />
                </Box>
                <Box display="flex" flex="1" justifyContent="center" marginRight="1%">
                  <BtnCustomize
                    flexGrow={1}
                    marginTop={"20px"}
                    color={"white"}
                    back={"#2BA55D"}
                    width={"100%"}
                    height={"50px"}
                    border={"1px solid #2BA55D"}
                    str={"Make an offer"}
                    borderRadius={"8px"}
                  />
                </Box>
                <Box display="flex" flex="0.3" justifyContent="flex-end">
                  <BtnCustomize
                    flexGrow={1}
                    marginTop={"20px"}
                    color={"#2BA55D"}
                    back={"white"}
                    width={"100%"}
                    height={"50px"}
                    border={"1px solid #2BA55D"}
                    str={<MdRemoveRedEye fontSize="30px" />}
                    borderRadius={"8px"}
                    marginLeft="2%"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Detail_Img>
      </Box>
      <Box display="flex" width="100%">
        <Underline1 display="flex" marginLeft="5%" marginRight="5%" width="100%" marginTop="2%">
          <Box display="flex" flex="4" width="100%" justifyContent="flex-start">
            <Box display="flex" width="95%" flexDirection="column">
              <List_ULetter ctheme={ctheme} str={"Description"} width1={"100%"} height1={"40px"}></List_ULetter>
              <Box display="flex" flexDirection="column" marginTop="30px" width="100%">
                <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start" fontFamily="Poppins" fontSize="18px" fontWeight="400" color="#363936">
                  Create by <Box color="#2BA55D">{"\u00a0"}username</Box>
                </Box>
                <Box display="flex" flex="1" alignItems="center" justifyContent="flex-start" fontFamily="Poppins" fontSize="18px" fontWeight="400" color="#363936">
                  {mainData.description}
                </Box>
              </Box>
              <List_ULetter ctheme={ctheme} str={"Property"} width1={"100%"} height1={"40px"}></List_ULetter>
              <List_ULetter ctheme={ctheme} str={"About this collection"} width1={"100%"} height1={"40px"}></List_ULetter>
              <List_ULetter ctheme={ctheme} str={"Details"} width1={"100%"} height1={"40px"}></List_ULetter>
            </Box>
          </Box>
          <Underline3 display="flex" flex="5" width="100%" justifyContent="center">
            <Underline2 display="flex" width="90%" flexDirection="column">
              <List_ULetter ctheme={ctheme} str={"Price history"} width1={"100%"} height1={"40px"}></List_ULetter>
              <Box display="flex">
                <img src={detail_chart1} width="100%" height="100%"></img>
              </Box>
            </Underline2>
          </Underline3>
        </Underline1>
      </Box>
      <Box display="flex" width="100%">
        <Box display="flex" marginLeft="5%" marginRight="5%" width="90%" marginTop="2%" flexDirection="column">
          <List_ULetter ctheme={ctheme} str={"Items activity"} width1={"100%"} height1={"40px"}></List_ULetter>
          <Drop_chart1>Need to make table here</Drop_chart1>
        </Box>
      </Box>
      <Box display="flex" width="100%">
        <Box display="flex" marginLeft="5%" marginRight="5%" width="90%" marginTop="2%" flexDirection="column">
          <List_ULetter ctheme={ctheme} str={"Other items in this collection"} width1={"100%"} height1={"40px"}></List_ULetter>
        </Box>
      </Box>
      <Part_Drop>
        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" marginBottom="5%">
          <Box display="flex" flexDirection="column" marginTop="2%">
            <GridShow display="grid" gridTemplateColumns="auto auto auto auto" gridGap="20px" justifyContent={"center"}>
              <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
                <Last_Drop index={1} img2={cover4} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
                <Last_Drop index={1} img2={cover5} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
                <Last_Drop index={1} img2={cover6} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
                <Last_Drop index={1} img2={cover7} simg={small_ellipse} simg1={small_duke} name={"Creator Name"} price={"310.9 DUKE"} ctheme={ctheme}></Last_Drop>
              </Box>
            </GridShow>
          </Box>
        </Box>
      </Part_Drop>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style1}>
          <MHeader>{mainData.title}</MHeader>
          <MContent alignItems="center" marginTop="3%">
            Buy NFT:{"\u00a0"}
            {process}
          </MContent>
          <MContent alignItems="flex-start" marginTop="1%">
            Just a moment until buy NFT.
          </MContent>
          {/* {!type_trans ? <>
            <MContent alignItems="center" marginTop="3%">Create Auction:{'\u00a0'}{process}</MContent>
            <MContent alignItems="flex-start" marginTop="1%">Just a moment until creating Aucion.</MContent></> :
            <>
              <MContent alignItems="center" marginTop="3%">Create NFT:{'\u00a0'}{process}</MContent>
              <MContent alignItems="flex-start" marginTop="1%">Just a moment until creating NFT.</MContent>
            </>} */}

          {/* <MContent alignItems="flex-start" marginTop="3%">Register for sale:{'\u00a0'}{process1}</MContent> */}

          {/* <MFooter></MFooter> */}
        </Box>
      </Modal>
    </>
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
`;

const Collection_Image = styled(Box)`
flex-direction: row;

@media(max-width: 600px) {
  flex-direction: column;
}
`;

const Underline1 = styled(Box)`
flex-direction: row;
@media(max-width: 800px) {
  flex-direction: column;
}
`;

const Underline2 = styled(Box)`
@media(max-width: 800px) {
  width: 95% !important;
}
`;

const Underline3 = styled(Box)`
@media(max-width: 800px) {
  justify-content: flex-start!important;
}
`;

const Detail_Img = styled(Box)`
flex-direction: row;
@media(max-width: 600px) {
  flex-direction: column;
}
`;

const Img_Title1 = styled(Box)`
@media(max-width: 1000px) {
}
`;

const Part_Drop = styled(Box)`
display: flex;
width: 100%;
margin-top: 20px;
flex-direction: column;
`;

const Drop_chart1 = styled(Box)`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 160px;
background: linear-gradient(273.64deg, rgba(187, 230, 204, 0.33) 3.14%, rgba(198, 231, 255, 0.31) 97.12%);
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: black;
// color: ${({ ctheme, ltheme, dtheme }) => (ctheme ? "black" : "white")};
`;

const MHeader = styled(Box)`
display: flex;
flex: 1;
width: 100%;
justify-content: center;
font-size: 38px;
color: white;
margin-top: 3%;
align-items: center;
`;

const MContent = styled(Box)`
display: flex;
flex: 2;
width: 100%;
justify-content: center;
font-size: 25px;
color: white;
`;

export default Detail_Page;
