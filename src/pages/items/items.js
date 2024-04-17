import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from "react-router";
import cover_big1 from '../../images/cover/cover_big1.png';
import small_ellipse from "../../images/small_ellipse2.png"
import small_duke from "../../images/small_duke1.png";
import icon_logo from "../../images/icon_logo.png";
import bnb1 from "../../images/bnb1.png";
import BtnCustomize from "../../components/buttons/btn_container"
import LastDrop from "../../components/carts/cart_item_drop"
import CartAuction from "../../components/carts/cart_auction"
import ImgLetter from "../../components/letters/img_letter"
import { lightTheme, darkTheme } from "../../theme/theme"
import { ethers } from 'ethers';
import { NFT_ABI } from '../../utils/abi';
import { CONTRACTS } from '../../utils/constants';
import { useWeb3React } from '@web3-react/core';
import Loader from 'react-loader-spinner';

const Items = ({ ctheme }) => {
    // const dispatch = useDispatch();
    const { account, library } = useWeb3React()
    const history = useHistory();
    const { nfts } = useSelector(state => state.product);
    const nftContract = useMemo(() => library ? new ethers.Contract(CONTRACTS.NFT, NFT_ABI, library.getSigner()) : null, [library])
    const [loading, set_loading] = useState(false);
    const [total_item, set_total_item] = useState(0);
    const [tokens_uri, set_tokens_uri] = useState([]);
    const [cnt, set_cnt] = useState(1);

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
            // let response_ipfs = 
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
            // if (i === parseInt(balance_owner._hex) - 1) {
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

    return (
        <StyledContainer ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme} position="relative">
            <>{cnt !== 1 ?
                <>
                    {!loading ?
                        <Box position="fixed" top="50%" left="50%" zIndex="100">
                            <Loader type="Oval" color="#2BA55D" height={100} width={100} />
                        </Box> : ''
                    }
                    <PartDrop>
                        <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
                            <ImgLetter letter={'Items 🚀'} ctheme={ctheme} />
                            <Box display="flex" marginTop="2%" marginBottom="2%" justifyContent="center">
                                <GridShow display="grid" gridTemplateColumns="auto auto auto auto auto" gridGap="20px">
                                    {
                                        tokens_uri.length > 0 && tokens_uri.map((item, index) => {
                                            return (
                                                <Box key={index} maxWidth="240px" display="flex" flex="1" borderRadius="10px" marginBottom="2%">
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
                    {!loading ?
                        <Box position="fixed" top="50%" left="50%" zIndex="100">
                            <Loader type="Oval" color="#2BA55D" height={100} width={100} />
                        </Box> : <PartDrop>
                            <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%" overflow={"hidden"}>
                                <ImgLetter letter={'Items 🚀'} ctheme={ctheme} />
                                <Box display="flex" marginTop="2%" marginBottom="2%" justifyContent="center">
                                    <GridShow display="grid" gridTemplateColumns="auto auto auto auto auto" gridGap="20px">
                                        {
                                            tokens_uri.length > 0 && tokens_uri.map((item, index) => {
                                                return (
                                                    <Box key={index} maxWidth="240px" display="flex" flex="1" borderRadius="10px" marginBottom="2%">
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
        </StyledContainer>
    );
};

const GridShow = styled(Box)`
            @media (max-width: 1800px) {
                grid - template - columns:auto auto auto auto !important;
    }
            @media (max-width: 1410px) {
                grid - template - columns: auto auto auto !important;
    }
            @media (max-width: 1200px) {
                grid - template - columns: auto auto !important;
    }
            @media (max-width: 850px) {
                grid - template - columns: auto !important;
    }
            `

const Header1space = styled(Box)`
            @media (max-width: 1000px) {
                margin - left: 8% !important;
            margin-right: 8% !important;
}
            @media (max-width: 800px) {
                margin - left: 5% !important;
            margin-right: 5% !important;
    }
            `

const HLetter = styled(Box)`
            display: flex;
            height:34px;
            justify-content: center;
            align-items: center;
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #2BA55D;
            border-top: 4px solid rgba(0,0,0,0);
            &:hover{
                border - top: 4px solid  #2BA55D;
            cursor: pointer;
    }
            @media (max-width: 1000px) {
                font - size: 12px;
    }
            @media (max-width: 800px) {
                font - size: 12px;
    }
            @media (max-width: 600px) {
                font - size: 8px;
    }

            `

const Header1 = styled(Box)`
            display: flex;
            width:100%;

            `

const StyledContainer = styled(Box)`
            position: relative;
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            background: ${({ ctheme, ltheme, dtheme }) => ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
            `

const Leftimgletter = styled(Box)`
            @media (max-width: 1200px) {
                font - size: 60px !important;
}
            @media (max-width: 1000px) {
                font - size: 72px !important;
}
            @media (max-width: 600px) {
                font - size: 50px !important;
}
            `

const Leftimgletter1 = styled(Box)`
            @media (max-width: 1200px) {
                font - size: 14px !important;
}
            @media (max-width: 1000px) {
                font - size: 20px !important;
}
            @media (max-width: 600px) {
                font - size: 14px !important;
}
            `

const Imgdownletter = styled(Box)`

            @media (max-width: 1200px) {
                font - size: 7px !important;
    }
            @media (max-width: 800px) {
                font - size: 12px !important;
    }
            @media (max-width: 600px) {
                font - size: 9px !important;
    }
            `

const Imgdownletter1 = styled(Box)`

            @media (max-width: 1200px) {
                font - size: 10px !important;
    }
            @media (max-width: 800px) {
                font - size: 18px !important;
    }
            @media (max-width: 600px) {
                font - size: 12px !important;
    }
            `
const PartHeader = styled(Box)`
            display: flex;
            width: 100%;
            flex-direction: row;
            @media (max-width: 1000px) {
                flex - direction: column;
    }
            `
const PartDrop = styled(Box)`
            display: flex;
            width: 100%;
            margin-top:5%;
            flex-direction: column;

            `

export default Items;