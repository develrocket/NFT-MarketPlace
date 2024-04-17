import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from "@material-ui/core";
import styled from "styled-components";
import { MdMenuOpen, MdLogout } from "react-icons/md";
import { injected, walletConnect, trustWallet, binance_wallet } from "../../utils/connectors";
// import _ from "lodash";
import { useWeb3React } from "@web3-react/core";
import metamask from "../../images/MetaMask.png";
import walletconnect from "../../images/WalletConnect.png";
import binance from "../../images/BinanceWallet.png";
import trust from "../../images/TrustWallet.png";
import img_logo from "../../images/logo_mark1.png";
import { lightTheme, darkTheme } from "../../theme/theme";
import { useHistory } from "react-router";
import { DropDown, DropDownItem } from "../../components/elements/dropdown.jsx";
import { setAccountRS } from "../../actions/auth";

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: 468,
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  backgroundColor: "#2BA55D",
  display: "flex",
  flexDirection: "column",
  outline: "none",
  border:'none'
};

const Header = ({ flag_sidebar, set_sidebar, ctheme }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const DESKTOP_CONNECTORS = {
    MetaMask: injected,
    WalletConnect: walletConnect,
    BinanceWallet: binance_wallet,
    TrustWallet: trustWallet,
  };

  // const MOBILE_CONNECTORS = {
  //   MetaMask: injected,
  //   TrustWallet: trustWallet,
  //   BinanceWallet: binance_wallet,
  // };

  const walletConnectors = DESKTOP_CONNECTORS;
  const { account, activate, deactivate } = useWeb3React();
  const handleDisconnect = () => {
    deactivate();
    window.localStorage.removeItem("CurrentWalletConnect");
    window.localStorage.removeItem("CurrentAccount");
  };

  const handleConnect = async (currentConnector) => {
    setOpen(false);
    await activate(walletConnectors[currentConnector]);
    
    window.localStorage.setItem("CurrentWalletConnect", currentConnector);
  };

  // const getShortTxHash = (txHash, margin = 4) => {
  //   if (_.isEmpty(txHash)) {
  //     return "";
  //   }
  //   return txHash.replace(txHash.substring(margin + 2, txHash.length - margin), "....");
  // };

  useEffect(() => {
    const currentWalletState = window.localStorage.getItem("CurrentWalletConnect");
    currentWalletState && activate(walletConnectors[currentWalletState]);
  }, []);

  useEffect(async () => {
    dispatch(await setAccountRS(account));
  }, [account]);

  return (
    <StyledContainer px="20px" boxSizing="border-box" ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme} zIndex={2}>
      {/* {theme? <div>123</div>:<div>KKK</div>} */}
      <Box display="flex" flex="1.3" alignItems="center" justifyContent="center" fontWeight="bold" fontSize="20px" color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}>
        <MdMenuOpen onClick={() => set_sidebar(!flag_sidebar)} fontSize="30px" color="#2BA55D" />
        <Logoimg
          onClick={() => {
            history.push({ pathname: "/" });
          }}
        >
          <img src={img_logo} width="55px" height="35px" style={{ marginLeft: "30px" }}></img>
        </Logoimg>
        {/* <Logoimg onClick={() => {
          history.push({ pathname: "/" });
          window.localStorage.setItem("CurrentAccount", account);
        }}>
          <img src={img_logo} width="55px" height="35px" style={{ marginLeft: "30px" }} alt=""></img>
          FASTSWAP
        </Logoimg> */}
      </Box>
      <Box display="flex" flex="3"></Box>
      <Box display="flex" flex="1" alignItems="center" justifyContent="center">
        {account ? (
          <DropDown text={account.slice(0, 7) + "..." + account.slice(-4)}>
            <DropDownItem
              onClick={() => {
                history.push("/Items");
              }}
            >
              Items
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                history.push("/Collection_page");
              }}
            >
              Collections
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                history.push("/watchlist");
              }}
            >
              WatchList
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                history.push("/offers");
              }}
            >
              Offers
            </DropDownItem>
            <Box width="80%" my={1} marginLeft={"10%"} borderTop="1px solid #cecece" />
            <DropDownItem
              onClick={() => {
                history.push("/Profile_empty");
              }}
            >
              Profile
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                history.push("/Setting_page");
              }}
            >
              Settings
            </DropDownItem>
            <DropDownItem
              onClick={() => {
                history.push("/transactions");
              }}
            >
              Transactions
            </DropDownItem>
            <Box width="80%" my={1} marginLeft={"10%"} borderTop="1px solid #cecece" />
            <DropDownItem
              onClick={() => {
                handleDisconnect();
              }}
            >
              <MdLogout fontSize="20px" /> Disconnect
            </DropDownItem>
          </DropDown>
        ) : (
          <Btnconnect onClick={handleOpen}>Connect</Btnconnect>
        )}
      </Box>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style1}>
          <Box
            sx={{
              height: "68px",
              display: "flex",
              alignItems: "flex-start",
              lineheight: "initial",
            }}
          >
            <Box fontSize="28px" fontWeight="bold" color="white">
              Select a Wallet
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" height="100%" width="100%">
            <Box display="flex" alignItems="center" height="100%" flex="1">
              <Box
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  display: "flex",
                  padding: "16px",
                  transition: "ease-out 0.4s",
                  alignItems: "center",
                  borderRadius: "12px",
                  flexDirection: "row",
                  backgroundColor: "#FCFCFC",
                  boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  height: "50%",
                }}
                onClick={() => {
                  handleConnect("MetaMask");
                }}
              >
                <img src={metamask} width="40px" height="40px" alt=""></img>
                <Connectbtnletter fontWeight="bold" margin="20px" color="#337ab7" fontSize="1.25rem">
                  MetaMask
                </Connectbtnletter>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" height="100%" flex="1">
              <Box
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  display: "flex",
                  padding: "16px",
                  transition: "ease-out 0.4s",
                  alignItems: "center",
                  borderRadius: "12px",
                  flexDirection: "row",
                  backgroundColor: "#FCFCFC",
                  boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  height: "50%",
                }}
                onClick={() => {
                  handleConnect("WalletConnect");
                }}
              >
                <img src={walletconnect} width="40px" height="40px" alt=""></img>
                <Connectbtnletter fontWeight="bold" margin="20px" color="#337ab7" fontSize="1.25rem">
                  WalletConnect
                </Connectbtnletter>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" height="100%" flex="1">
              <Box
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  display: "flex",
                  padding: "16px",
                  transition: "ease-out 0.4s",
                  alignItems: "center",
                  borderRadius: "12px",
                  flexDirection: "row",
                  backgroundColor: "#FCFCFC",
                  boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  height: "50%",
                }}
                onClick={() => {
                  handleConnect("BinanceWallet");
                }}
              >
                <img src={binance} width="40px" height="40px" alt=""></img>
                <Connectbtnletter fontWeight="bold" margin="20px" color="#337ab7" fontSize="1.25rem">
                  BinanceWallet
                </Connectbtnletter>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" height="100%" flex="1">
              <Box
                sx={{
                  width: "100%",
                  cursor: "pointer",
                  display: "flex",
                  padding: "16px",
                  transition: "ease-out 0.4s",
                  alignItems: "center",
                  borderRadius: "12px",
                  flexDirection: "row",
                  backgroundColor: "#FCFCFC",
                  boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
                  height: "50%",
                }}
                onClick={() => {
                  handleConnect("TrustWallet");
                }}
              >
                <img src={trust} width="40px" height="40px" alt=""></img>
                <Connectbtnletter fontWeight="bold" margin="20px" color="#337ab7" fontSize="1.25rem">
                  TrustWallet
                </Connectbtnletter>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </StyledContainer>
  );
};

const Connectbtnletter = styled(Box)`
  @media (max-width: 400px) {
    font-size: 0.75rem !important;
  }
`;

const Logoimg = styled(Box)`
  font-family: Poppins;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  height: 64px;
  background: ${({ ctheme, ltheme, dtheme }) => (ctheme ? ltheme.bgcolor_bar : dtheme.bgcolor_bar)};
  border-bottom: ${({ ctheme }) => (ctheme ? "2px solid #F0F0F0" : "2px solid #2ba55d")};
  //#564a4a
  // box-shadow: 0px 4px 3px -4px rgba(0, 0, 0, 0.08);
`;

const Btnconnect = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 32px;
  background: #2ba55d;
  border-radius: 8px;
  color: white;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

export default Header;
