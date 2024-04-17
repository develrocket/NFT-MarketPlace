import React, { useState } from "react";
import { Box, Table, TableHead, TableBody, TableCell, TableRow, MenuItem } from "@material-ui/core";
import { VscLinkExternal } from "react-icons/vsc";
import { TiArrowSortedDown } from "react-icons/ti";

import { CustomSelect } from "../../components/elements/index";
import NFTImage1 from "../../images/cover/cover-3.png";
import TokenImage from "../../images/small_duke1.png";
import { FillSmBtn, OutlineSmBtn } from "../../components/buttons";

const RankingsPage = ({ ctheme }) => {
  const [viewDate, SetViewDate] = useState(7);
  const [currentTab, setCurrentTab] = useState("collections");
  const TopSalesData = [
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
    {
      nft: "NFT name",
      price: ["152.25 DUKE", "$234.88"],
      time: "2021-11-28 05:56:20",
    },
  ];
  const TopCreatorsData = {
    unit: "$",
    unitName: "USD",
    data: [
      {
        name: "Creator name",
        volumn: 41234,
        items: 33,
      },
      {
        name: "Creator name",
        volumn: 41234,
        items: 33,
      },
      {
        name: "Creator name",
        volumn: 41234,
        items: 33,
      },
      {
        name: "Creator name",
        volumn: 41234,
        items: 33,
      },
    ],
  };
  const TopCollectionsData = [
    {
      collections: "Collection name",
      volumn: ["152.25 DUKE", "$234.88"],
      percent: -32,
      price: ["152.25 DUKE", "$234.88"],
      items: "321",
      owners: "123",
    },
    {
      collections: "Collection name",
      volumn: ["152.25 DUKE", "$234.88"],
      percent: -32,
      price: ["152.25 DUKE", "$234.88"],
      items: "321",
      owners: "123",
    },
    {
      collections: "Collection name",
      volumn: ["152.25 DUKE", "$234.88"],
      percent: 32,
      price: ["152.25 DUKE", "$234.88"],
      items: "321",
      owners: "123",
    },
    {
      collections: "Collection name",
      volumn: ["152.25 DUKE", "$234.88"],
      percent: -32,
      price: ["152.25 DUKE", "$234.88"],
      items: "321",
      owners: "123",
    },
    {
      collections: "Collection name",
      volumn: ["152.25 DUKE", "$234.88"],
      percent: 32,
      price: ["152.25 DUKE", "$234.88"],
      items: "321",
      owners: "123",
    },
  ];
  return (
    <Box px={[6, 7, 9, 11]}>
      <Box mt={["20px", "40px", "60px", "64px"]} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box fontFamily={"Poppins"} fontSize={["20px", "26px", "34px"]} lineHeight={["20px", "30px", "34px"]} fontWeight={"bold"} color={"#131413"} letterSpacing={"0.5px"}>
          Rankings
        </Box>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={viewDate}
          label="Age"
          onChange={(e) => {
            SetViewDate(e.target.value);
          }}
        >
          <MenuItem value={7}>Last 7 days</MenuItem>
          <MenuItem value={15}>Last 15 days</MenuItem>
          <MenuItem value={30}>Last 30 days</MenuItem>
        </CustomSelect>
      </Box>
      <Box mt={[1, 1, 2, 3]} display={"flex"} justifyContent={"flex-start"} gridGap={"24px"}>
        {currentTab === "collections" ? (
          <FillSmBtn px={"24px"}>Top collections</FillSmBtn>
        ) : (
          <OutlineSmBtn px={"24px"} onClick={() => setCurrentTab("collections")}>
            Top collections
          </OutlineSmBtn>
        )}
        {currentTab === "sales" ? (
          <FillSmBtn px={"24px"}>Top Sales</FillSmBtn>
        ) : (
          <OutlineSmBtn px={"24px"} onClick={() => setCurrentTab("sales")}>
            Top Sales
          </OutlineSmBtn>
        )}
        {currentTab === "creators" ? (
          <FillSmBtn px={"24px"}>Top Creators</FillSmBtn>
        ) : (
          <OutlineSmBtn px={"24px"} onClick={() => setCurrentTab("creators")}>
            Top Creators
          </OutlineSmBtn>
        )}
      </Box>
      <Box mt={6} color={"#131413"}>
        {currentTab === "collections" && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    Collections
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    Volume
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell css={{ cursor: "pointer" }}>
                  <Box display={"flex"} alignItems={"center"}>
                    {viewDate} d %<TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    Floor Price
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Owners</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TopCollectionsData.map((each, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box mr={1} border={"4px solid #FCFCFC"} borderRadius={8} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                        <img width={"40px"} height={"40px"} src={NFTImage1} alt="" />
                      </Box>
                      <Box fontSize={[12, 14, 16, 18]} fontWeight={500} lineHeight={1} color={"#131413"}>
                        {each.collections}
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
                          {each.volumn[0]}
                        </Box>
                        <Box mt={0.5} fontSize={[10, 10, 12, 12]} fontWeight={500} color={"#757B75"}>
                          {each.volumn[1]}
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={each.percent > 0 ? "#2BA55D" : "#F16868"} display={"flex"} alignItems={"center"} gridColumnGap={10}>
                      {each.percent > 0 && "+"}
                      {each.percent}&nbsp;%
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
                    <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={"#131413"}>
                      123
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={"#131413"} display={"flex"} alignItems={"center"} gridColumnGap={10}>
                      123
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {currentTab === "sales" && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    NFT
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    Price
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TopSalesData.map((each, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box mr={1} borderRadius={8} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                        <img height={"40px"} src={NFTImage1} alt="" />
                      </Box>
                      <Box fontSize={[12, 14, 16, 18]} fontWeight={500} lineHeight={1} color={"#131413"}>
                        {each.nft}
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
                    <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={"#131413"} display={"flex"} alignItems={"center"} gridColumnGap={10}>
                      {each.time}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {currentTab === "creators" && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    Creator
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"} gridGap={"8px"} css={{ cursor: "pointer" }}>
                    Volumn ({TopCreatorsData.unitName})
                    <TiArrowSortedDown />
                  </Box>
                </TableCell>
                <TableCell>Items</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {TopCreatorsData.data.map((each, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Box display={"flex"} alignItems={"center"}>
                      <Box mr={1} bgcolor={"#54DADE"} borderRadius={"100%"} overflow={"hidden"} display={"flex"} alignItems={"center"}>
                        <img width={"32px"} height={"32px"} src={TokenImage} alt="" />
                      </Box>
                      <Box fontSize={[12, 14, 16, 18]} fontWeight={500} lineHeight={1} color={"#131413"}>
                        {each.name}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box fontSize={[12, 14, 16, 18]} lineHeight={1}>
                      {TopCreatorsData.unit}
                      {each.volumn}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box fontSize={[12, 14, 16, 18]} lineHeight={1} fontWeight={500} color={"#131413"} display={"flex"} alignItems={"center"} gridColumnGap={10}>
                      123
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Box>
      <Box mt={[2, 3, 4, 5]} display={"flex"} justifyContent={"center"} gridGap={"32px"}>
        <OutlineSmBtn px={"48px"}>&lt; 1-10</OutlineSmBtn>
        <OutlineSmBtn px={"48px"}>10-20 &gt;</OutlineSmBtn>
      </Box>
    </Box>
  );
};

export default RankingsPage;
