import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import tiger1 from "../../images/tiger1.png";
import icon_logo from "../../images/icon_logo.png";
import { lightTheme, darkTheme } from "../../theme/theme";

import BtnCustomize from "../../components/buttons/btn_container";
const Profile_page_prev = ({ ctheme }) => {
  return (
    <>
      <Box display="flex" width="100%" marginTop="5%">
        <DetailImg display="flex" marginLeft="5%" marginRight="5%" width="100%">
          <Box display="flex" flex="4" borderRadius="8px">
            <img src={tiger1} width="100%" height="100%" borderRadius="8px" alt=""></img>
          </Box>
          <Box display="flex" flex="5" justifyContent="center">
            <Box display="flex" flexDirection="column" width="90%">
              <Box display="flex" flex="2" flexDirection="column" marginTop="1%">
                <ImgTitle1 display="flex" flex="1" fontFamily="Work Sans" fontWeight="800" fontSize="34px" color="#363936" lineHeight="40px" alignItems="center">
                  Profile Activation
                </ImgTitle1>
                <ImgTitle1 display="flex" flex="1" fontFamily="Work Sans" fontWeight="500" fontSize="18px" color="black" lineHeight="40px" alignItems="flex-start">
                  Show off your stats and collectible with your profile{" "}
                </ImgTitle1>
              </Box>
              <Box display="flex" flex="1" flexDirection="column" marginTop="1%">
                <Box display="flex" flex="1" alignItems="flex-end" fontFamily="Work Sans" fontSize="10px" fontWeight="400" color="#757B75">
                  Lowest price
                </Box>
                <Box display="flex" flex="1" alignItems="flex-start" marginTop="10px">
                  <Box display="flex" alignItems="center">
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={icon_logo} width="24px" height="24px" alt=""></img>
                    </Box>
                    <Box display="flex" flex="5"justifyContent="center">
                        <Box display="flex" flexDirection="column" width="90%">
                            <Box display="flex" flex="2" flexDirection="column" marginTop="1%">
                                <ImgTitle1 display="flex" flex="1" fontFamily="Poppins" fontWeight="800" fontSize="34px" color="#363936" lineheight="40px" alignItems="center">Profile Activation</ImgTitle1>
                                <ImgTitle1 display="flex" flex="1" fontFamily="Poppins" fontWeight="500" fontSize="18px" color="black" lineheight="40px" alignItems="flex-start">Show off your stats and collectible with your profile  </ImgTitle1>
                            </Box>
                            <Box display="flex" flex="1" flexDirection="column" marginTop="1%">
                                <Box display="flex" flex="1" alignItems="flex-end" fontFamily="Poppins" fontSize="10px" fontWeight="400" color="#757B75">
                                    Lowest price
                                </Box>
                                <Box display="flex" flex="1" alignItems="flex-start" marginTop="10px">
                                    <Box display="flex" alignItems="center">
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img src={icon_logo} width="24px" height="24px" alt=""></img>
                                        </Box>
                                        <Box display="flex" justifyContent="center" alignItems="center" marginLeft="10px" fontFamily="Poppins" fontSize="18px" fontWeight="400" color="#131413">200.1 FAST</Box>
                                        <Box display="flex" justifyContent="center" alignItems="center" marginLeft="10px" fontFamily="Poppins" fontSize="12px" fontWeight="400" color="#757B75">$4.05</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" flex="2" alignItems="flex-start" marginTop="1%">
                                <BtnCustomize color={'white'} back={'#2BA55D'} width={'100%'} height={'56px'} border={'1px solid #2BA55D'} str={'Pay activation fee now'} borderRadius={'8px'} />

                            </Box>
                        </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flex="2" alignItems="flex-start" marginTop="1%">
                <BtnCustomize color={"white"} back={"#2BA55D"} width={"100%"} height={"56px"} border={"1px solid #2BA55D"} str={"Pay activation fee now"} borderRadius={"8px"} />
              </Box>
            </Box>
          </Box>
        </DetailImg>
      </Box>
    </>
  );
};

const DetailImg = styled(Box)`
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImgTitle1 = styled(Box)`
  @media (max-width: 1000px) {
    font-size: 25px !important;
  }
`;

export default Profile_page_prev;
