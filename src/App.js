/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import PageHeader, { StyledContainer } from "./components/pageComps";
import Header from "./pages/header/header";
import Sidebar from "./pages/sidebar/sidebar";
import Mainpage from "./pages/mainpage/mainpage";
import Collection_page from "./pages/collection_page/collection_page";
import Detail_page from "./pages/detail_page/detail_page";
import Detail_Page_Auction from "./pages/detail_page_auction/detail_page_auction";
import Profile_page_prev from "./pages/profile_page/profile_page_prev";
import Profile_page_empty from "./pages/profile_page/profile_page_empty";
import Create_NFT from "./pages/create_nft/create_nft";
import getProducts from "./actions/product";
import getAuctions from "./actions/productAuction";
import SettingPage from "./pages/settingpage";
import Activities from "./pages/activities";
import Explore from "./pages/explore";
import Rankings from "./pages/rankings";
import Items from "./pages/items/items";
import { lightTheme, darkTheme } from "./theme/theme";

import "./App.css";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function App() {
  const dispatch = useDispatch();

  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      width: "100%",
      background: "#FCFCFC",
    },
  };

  const [flag_sidebar, set_sidebar] = useState(false);
  const [ctheme, setTheme] = useState(true);

  useEffect(async () => {
    dispatch(await getProducts());
    dispatch(await getAuctions());
  }, [dispatch]);
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <Header flag_sidebar={flag_sidebar} set_sidebar={set_sidebar} ctheme={ctheme}></Header>
          {/* <div style={styles.contentDiv}>
          <div className={"sidebar1" + (flag_sidebar ? " collapse" : " expand")} style={{ display: "none" }}>
            <Sidebar flag_sidebar={false} ctheme={ctheme} setTheme={setTheme}></Sidebar>
          </div>
          <div className="sidebar2">
            <Sidebar flag_sidebar={flag_sidebar} ctheme={ctheme} setTheme={setTheme}></Sidebar>
          </div> */}
          <div style={styles.contentDiv}>
            <div className="sidebar1" style={{ display: "none", minHeight: "100vh" }}>
              <Sidebar flag_sidebar={1} ctheme={ctheme} setTheme={setTheme}></Sidebar>
            </div>
            <div className="sidebar2" style={ctheme?{ minHeight: "100vh", backgroundColor:"white", borderRight:"2px solid #F0F0F0"}:{ minHeight: "100vh", backgroundColor:"rgb(39, 38, 44)", borderRight:"2px solid #2ba55d"}} >
              <Sidebar flag_sidebar={flag_sidebar} ctheme={ctheme} setTheme={setTheme}></Sidebar>
            </div>
            <StyledContainer ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme}>
              <PageHeader />
              <Switch>
                <Route exact path="/">
                  <Mainpage ctheme={ctheme} />
                </Route>
                <Route exact path="/Collection_page1">
                  <Collection_page ctheme={ctheme} />
                </Route>
                <Route exact path="/Detail_page">
                  <Detail_page ctheme={ctheme} />
                </Route>
                <Route exact path="/Detail_page_auction">
                  <Detail_Page_Auction ctheme={ctheme} />
                </Route>
                <Route exact path="/Profile_prev">
                  <Profile_page_prev ctheme={ctheme} />
                </Route>
                <Route exact path="/Profile_empty">
                  <Profile_page_empty ctheme={ctheme} />
                </Route>
                <Route exact path="/Create_NFT">
                  <Create_NFT ctheme={ctheme} />
                </Route>
                <Route exact path="/Setting_page">
                  <SettingPage ctheme={ctheme} />
                </Route>
                <Route exact path="/activities">
                  <Activities ctheme={ctheme} />
                </Route>
                <Route exact path="/explore">
                  <Explore ctheme={ctheme} />
                </Route>
                <Route exact path="/rankings">
                  <Rankings ctheme={ctheme} />
                </Route>
                <Route exact path="/Items">
                  <Items ctheme={ctheme} />
                </Route>
              </Switch>
            </StyledContainer>
          </div>
        </Router>
      </Web3ReactProvider>
    </>
  );
}

export default App;
