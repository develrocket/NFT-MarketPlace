/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState, useMemo } from 'react';
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { FiMove } from "react-icons/fi";
import { Box, Slider } from "@material-ui/core";
import styled from "styled-components";
import cover_big1 from "../../images/cover/collection_header.png";
import tiger_circle1 from "../../images/tiger_circle1.png";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/Duke.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";
import BtnCustomize from "../../components/buttons/btn_container";
import BtnCustomizeSave from "../../components/buttons/btn_customize_save";
import Last_Drop from "../../components/carts/cart_drop";
import { lightTheme, darkTheme } from "../../theme/theme";
import LastDrop from "../../components/carts/cart_item_drop"
import ImgLetter from "../../components/letters/img_letter";
import { ethers } from 'ethers';
import { NFT_ABI } from '../../utils/abi';
import { CONTRACTS } from '../../utils/constants';
import { useWeb3React } from '@web3-react/core';
import Loader from 'react-loader-spinner';
import useWallet from '../../hooks/useWallet';
import { getProfile } from '../../services/userAPI';

const Profile_page_empty = ({ ctheme }) => {
  const { account, library } = useWeb3React()
  const [flag_move, set_move] = useState(false);
  const nftContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.NFT, NFT_ABI, library.getSigner()) : null, [library])
  const [loading, set_loading] = useState(false);
  const [total_item, set_total_item] = useState(0);
  const [tokens_uri, set_tokens_uri] = useState([]);
  const [cnt, set_cnt] = useState(1);

  const { signMessage } = useWallet();

  const handleCreate = () => {
    console.log('handleCreate');
    signMessage();
  }

  const get_items = async () => {
    const balance_owner = await nftContract.balanceOf(account);
    let total = parseInt(balance_owner._hex);
    if (total > 12) {
      total = total - 12;
      set_total_item(total);
    }
    let tokens = [];
    for (let i = 0; i < 12; i++) {
      let owner_index = await nftContract.tokenOfOwnerByIndex(account, i);
      let token_uri = await nftContract.tokenURI(owner_index);
      await fetch(token_uri).then(async (res) => {
        let json_ipfs = await res.json();
        tokens.push({
          image: json_ipfs.image,
          name: json_ipfs.name,
          description: json_ipfs.description
        });
      }).catch((error) => {
        // console.log(error);
      });
      // if (i === parseInt(balance_owner._hex)-1) {
      //     set_loading(true);
      // }
      if (i === 11) {
        set_loading(true);
      }
    }
    set_tokens_uri(tokens);
  }

  const get_more_items = async () => {
    let t_cnt = cnt;
    t_cnt++;
    set_cnt(t_cnt);
    if (total_item > 12) {
      set_loading(false);
      let tokens = tokens_uri;
      let temp = total_item;
      temp = temp - 12;
      set_total_item(temp);
      for (let i = 12 * cnt; i < 12 * (cnt + 1); i++) {
        let owner_index = await nftContract.tokenOfOwnerByIndex(account, i);
        let token_uri = await nftContract.tokenURI(owner_index);
        await fetch(token_uri).then(async (res) => {
          let json_ipfs = await res.json();
          tokens.push({
            image: json_ipfs.image,
            name: json_ipfs.name,
            description: json_ipfs.description
          });
        }).catch((error) => {
          // console.log(error);
        });
        if (i === 12 * (cnt + 1) - 1) {
          set_loading(true);
        }
      }
      set_tokens_uri(tokens);
    }
    else {
      set_loading(false);
      let tokens = tokens_uri;
      for (let i = 12 * cnt; i < 12 * cnt + total_item; i++) {
        let owner_index = await nftContract.tokenOfOwnerByIndex(account, i);
        let token_uri = await nftContract.tokenURI(owner_index);
        await fetch(token_uri).then(async (res) => {
          let json_ipfs = await res.json();
          tokens.push({
            image: json_ipfs.image,
            name: json_ipfs.name,
            description: json_ipfs.description
          });
        }).catch((error) => {
          // console.log(error);
        });
        if (i === 12 * cnt + total_item - 1) {
          set_loading(true);
        }
      }
      set_tokens_uri(tokens);
    }


  }
  useEffect(() => {
    get_items();
  }, [])
  useEffect(async () => {
    const profile_date = await getProfile(account);
    console.log("sfsfafsdf:",profile_date)
  }, [])

  return (
    <>
      <Show_Detail>
        <Box display="flex" flex="1" marginLeft="5%" marginTop="6%" flexDirection="column" marginRight="5%" position="relative">
          <Camera_move1 display="flex" flex="210" width="100%">
            <img src={cover_big1} width="100%" height="210px"></img>
            <Box position="absolute" display="none" width="9%" height="12%" justifyContent="center" alignItems="center" right="0px" bottom="10%">
              <Box width="25%" height="100%" bgcolor="white" borderRadius="100%" justifyContent="center" alignItems="center" marginRight="5%">
                <FaCamera fontSize="18px" color="#323232"></FaCamera>
              </Box>
              <Box
                width="25%"
                height="100%"
                bgcolor="white"
                borderRadius="100%"
                justifyContent="center"
                alignItems="center"
                onClick={() => {
                  set_move(!flag_move);
                }}
              >
                <FiMove fontSize="18px" color="#323232" fontWeight="bold"></FiMove>
              </Box>
            </Box>
            <Drag_reposition display="none" position="absolute" top="40%" left="40%" width="25%" height="40px" bgcolor="#FCFCFC" borderRadius="8px" fontSize="20px" fontWeight="300" fontFamily="Poppins" alignItems="center" justifyContent="center">
              Drag to reposition{"\u00a0"}
              {"\u00a0"}
              <FiMove />
            </Drag_reposition>
          </Camera_move1>
          <Box display="flex" flex="50" marginTop="1%" width="100%">
            {flag_move === true ? (
              <Box position="absolute" display="flex" width="100%" justifyContent="flex-end" alignItems="center">
                <Box display="flex" width="30%" fontSize="20px" fontWeight="800" fontFamily="Poppins" alignItems="center" bgcolor="#FFFFFF" border="1px solid #CECECE" borderRadius="8px" marginRight="2%">
                  {"\u00a0"}
                  {"\u00a0"}-{"\u00a0"}
                  {"\u00a0"}
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                  {"\u00a0"}
                  {"\u00a0"}+{"\u00a0"}
                  {"\u00a0"}
                </Box>
                <BtnCustomizeSave color={"white"} back={"#2BA55D"} width={"10%"} height={"40px"} border={"1px solid #2BA55D"} str={"Save"} borderRadius={"8px"} />
              </Box>
            ) : null}
          </Box>
          <Tiger_img1 position="absolute" bottom="-15%" left="10%" width="7%">
            <img src={tiger_circle1} width="100%" height="80px"></img>
            <Tiger_camera position="absolute" left="30%" top="30%" width="40%" height="40%" display="none" bgcolor="white" borderRadius="100%" justifyContent="center" alignItems="center">
              <FaCamera fontSize="18px" color="#323232"></FaCamera>
            </Tiger_camera>
          </Tiger_img1>
        </Box>
        <Box display="flex" flex="1" marginLeft="5%" marginRight="5%" marginTop="5%">
          <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginLeft="5%">
            <Detail_Letter0 display="flex" alignItems="flex-start" fontFamily="Poppins" fontSize="24px" fontWeight="600">
              Name
              <Box marginLeft="3%" display="none">
                <FaPencilAlt fontSize="20px" color="#323232"></FaPencilAlt>
              </Box>
            </Detail_Letter0>
            <Detail_letter1 display="flex" fontFamily="Poppins" fontSize="18px" color="#363936" lineheight="22px">
              <pre>
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit. Placerat <br />
                praesent in dictum arcu consequat.
                <br />
                Porttitor nisl enim dictum ut non
                <br />
                consectetur euismod. Aliquam lorem <br />
                neque, lobortis neque arcu.
              </pre>
              <Box marginLeft="5%" marginTop="2%" display="none">
                <FaPencilAlt fontSize="20px" color="#323232"></FaPencilAlt>
              </Box>
            </Detail_letter1>
          </Box>
          <Box_Price1 display="flex" flex="1" justifyContent="flex-end" alignItems="center" flexDirection="column">
            <Box display="flex" flex="1"></Box>
            <Box_Letter1 width="80%" display="flex" flex="1" border="1px solid #CECECE" borderRadius="8px">
              <Box_Letter2 display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Poppins" fontWeight="800">
                  47
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
                  Ave. Value
                </Detail_letter3>
              </Box_Letter2>
              <Box display="flex" flex="1.2" flexDirection="column">
                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Poppins" fontWeight="800">
                  $24,239
                </Detail_letter2>
                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Poppins" color="#757B75">
                  Total Value
                </Detail_letter3>
              </Box>
            </Box_Letter1>
            <Box width="80%" display="flex" flex="1"></Box>
            <Box_create_nft display="flex" flex="1" width="80%" justifyContent="flex-end">
              <BtnCustomize color={"white"} back={"#2BA55D"} width={"60%"} height={"56px"} border={"1px solid #2BA55D"} str={"+ Create NFT"} borderRadius={"8px"} onClick={handleCreate} />
            </Box_create_nft>
          </Box_Price1>
        </Box>
      </Show_Detail>
      <Show_Items>
        <Underline_link display="flex" marginLeft="5%" marginRight="5%" marginTop="2%" borderBottom="1px solid #CECECE" width="100%">
          <LItem_group display="flex" width="5%" marginRight="5%" justifyContent="center">
            <LItem_upletter justifyContent="center" alignItems="flex-start">
              All
            </LItem_upletter>
            <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">
              35
            </LItem_upletter1>
          </LItem_group>
          <LItem_group display="flex" width="7%" marginRight="5%" justifyContent="center">
            <LItem_upletter justifyContent="center" alignItems="flex-start">
              Owned
            </LItem_upletter>
            <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">
              22
            </LItem_upletter1>
          </LItem_group>
          <LItem_group display="flex" width="12%" marginRight="5%" justifyContent="center">
            <LItem_upletter justifyContent="center" alignItems="flex-start">
              On Auction
            </LItem_upletter>
            <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">
              14
            </LItem_upletter1>
          </LItem_group>
          <LItem_group display="flex" width="7%" marginRight="5%" justifyContent="center">
            <LItem_upletter justifyContent="center" alignItems="flex-start">
              Sold
            </LItem_upletter>
            <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">
              5
            </LItem_upletter1>
          </LItem_group>
          <LItem_group display="flex" width="12%" marginRight="5%" justifyContent="center">
            <LItem_upletter justifyContent="center" alignItems="flex-start">
              Watch List
            </LItem_upletter>
            <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">
              10
            </LItem_upletter1>
          </LItem_group>
          <LItem_group display="flex" width="7%" justifyContent="center">
            <LItem_upletter justifyContent="center" alignItems="flex-start">
              Hidden
            </LItem_upletter>
            <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">
              3
            </LItem_upletter1>
          </LItem_group>
        </Underline_link>
      </Show_Items>

      <Box display="flex" width="100%" marginTop="3%">
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
            <BtnCustomize color={"#757B75"} back={"white"} width={"100%"} height={"32px"} border={"1px solid #757B75"} str={"Price-lowest"} borderRadius={"8px"} />
          </Box>
        </Box>
      </Box>
      <>{cnt !== 1 ?
        <>
          {!loading ?
            <Box position="fixed" top="50%" left="50%" zIndex="100">
              <Loader type="Oval" color="#2BA55D" height={100} width={100} />
            </Box> : ''
          }

          <PartDrop>
            <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
              <Box display="flex" marginTop="2%" marginBottom="2%" justifyContent="center">
                <GridShow display="grid" gridTemplateColumns="auto auto auto auto auto" gridGap="20px">
                  {
                    tokens_uri.length > 0 && tokens_uri.map((item, index) => {
                      console.log(item)
                      return (
                        <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
                          <LastDrop index={index} img={item.image} simg={small_ellipse} title={item.name} name={item.description} ctheme={ctheme}></LastDrop>
                        </Box>
                      )
                    })
                  }
                </GridShow>
              </Box>
              <Box marginTop="5%" display="flex" justifyContent="center" marginBottom="5%">
                <Box display="flex" width="40%" onClick={() => { get_more_items() }}>
                  <BtnCustomize display="flex" color={"white"} back={"#2BA55D"} width={"100%"} height={"56px"} border={"1px solid #2BA55D"} str={"Explore more"} borderRadius={"8px"} />
                </Box>
              </Box>
            </Box>
          </PartDrop>
        </> :
        <>
          {
            !loading ?
              <Box position="fixed" top="50%" left="50%" zIndex="100">
                <Loader type="Oval" color="#2BA55D" height={100} width={100} />
              </Box> : <PartDrop>
                <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
                  <Box display="flex" marginTop="2%" marginBottom="2%" justifyContent="center">
                    <GridShow display="grid" gridTemplateColumns="auto auto auto auto auto" gridGap="20px">
                      {
                        tokens_uri.length > 0 && tokens_uri.map((item, index) => {
                          return (
                            <Box mt={[1, 2, 3, 3]} display={"flex"} justifyContent={"center"} flexWrap={"wrap"} gridGap={24}>
                              <LastDrop index={index} img={item.image} simg={small_ellipse} title={item.name} name={item.description} ctheme={ctheme}></LastDrop>
                            </Box>
                          )
                        })
                      }
                    </GridShow>
                  </Box>
                  <Box marginTop="5%" display="flex" justifyContent="center" marginBottom="5%">
                    <Box display="flex" width="40%" onClick={() => { get_more_items() }}>
                      <BtnCustomize display="flex" color={"white"} back={"#2BA55D"} width={"100%"} height={"56px"} border={"1px solid #2BA55D"} str={"Explore more"} borderRadius={"8px"} />
                    </Box>
                  </Box>
                </Box>
              </PartDrop>
          }
        </>
      }</>
    </>
  );
};

const GridShow = styled(Box)`
      @media (max-width: 1800px) {
        grid-template-columns:auto auto auto auto !important;
    }
      @media (max-width: 1410px) {
        grid-template-columns: auto auto auto !important;
    }
      @media (max-width: 1200px) {
        grid-template-columns: auto auto !important;
    }
      @media (max-width: 850px) {
        grid-template-columns: auto !important;
    }

      `
const Drag_reposition = styled(Box)`
      opacity: 0.8;
      `;

const Box_create_nft = styled(Box)`
      @media(max-width: 600px) {
        display: none!important;
}
      `;

const Camera_move1 = styled(Box)`
      &:hover {
        div {
        display: flex!important;
  }
}
      `;

const Tiger_img1 = styled(Box)`
      &:hover {
        div {
        display: flex!important;
  }
}
      `;

const Tiger_camera = styled(Box)``;

const Underline_link = styled(Box)`
      flex-direction: row;
      `;

const Collection_Image = styled(Box)`
      flex-direction: row;
      @media(max-width: 600px) {
        flex-direction: column;
}
      `;

const Box_Price1 = styled(Box)`
      @media(max-width: 600px) {
        display: none!important;
}
      `;

const Tab_letter1 = styled(Box)`
      @media(max-width: 960px) {
        display: none!important;
}
      `;

const Detail_Letter0 = styled(Box)`
      @media(max-width: 1000px) {
        font-size: 20px!important;
}
      @media(max-width: 600px) {
        font-size: 15px!important;
}
      &:hover {
        cursor: pointer;
      div {
        display: flex!important;
  }
}
      `;

const Box_Letter1 = styled(Box)`
      display: flex;
      flex-direction: row;
      @media(max-width: 600px) {
        flex-direction: column;
      height: 120px!important;
}
      `;
const Box_Letter2 = styled(Box)`
      @media(max-width: 600px) {
        border-right: none!important;
      border-bottom: 1px solid #cecece!important;
}
      `;

const Detail_letter1 = styled(Box)`
      @media(max-width: 1200px) {
        font-size: 15px!important;
}
      @media(max-width: 1000px) {
        font-size: 12px!important;
}
      @media(max-width: 1000px) {
        font-size: 10px!important;
}
      @media(max-width: 600px) {
        font-size: 8px!important;
      &:hover {
        cursor: pointer;
      div {
        display: flex!important;
    }
  }
}
      `;

const Detail_letter2 = styled(Box)`
      @media(max-width: 1200px) {
        font-size: 15px!important;
}
      @media(max-width: 1000px) {
        font-size: 12px!important;
}
      @media(max-width: 800px) {
        font-size: 9px!important;
}
      `;

const Detail_letter3 = styled(Box)`
      @media(max-width: 1200px) {
        font-size: 10px!important;
}

      @media(max-width: 1000px) {
        font-size: 8px!important;
}
      `;

const PartDrop = styled(Box)`
      display: flex;
      width: 100%;
      flex-direction: column;
      `;

const LItem_group = styled(Box)`
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      color: #757b75;
      border-bottom: 4px solid rgba(0, 0, 0, 0);
      &:hover {
        color: #2ba55d;
      border-bottom: 4px solid #2ba55d;
}
      `;
const LItem_upletter = styled(Box)`
      font-size: 18px;
      @media(max-width: 1000px) {
        font-size: 12px!important;
}
      `;

const LItem_upletter1 = styled(Box)`
      font-size: 12px;
      @media(max-width: 1000px) {
        font-size: 9px!important;
}
      `;

const Show_Items = styled(Box)`
      width: 100%;
      display: flex;
      margin-top: 5%;
      @media(max-width: 900px) {
        display: none!important;
}
      `;

const Show_Detail = styled(Box)`
      width: 100%;
      display: flex;
      height: 520px;
      flex-direction: column;
      `;

export default Profile_page_empty;
