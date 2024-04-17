/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../../theme/theme";
import { useHistory } from "react-router";

const LastDrop = ({ index, img, simg, title, name, ctheme, payment }) => {
  const history = useHistory();
  const price_format = (value) => {
    var temp = value;
    if(payment === 'DUKE')
    {
      temp = value / Math.pow(10,9);
    }
    else if(payment === 'FAST')
    {
      temp = value / Math.pow(10,18);
    }
    else if(payment === 'BNB')
    {
      temp = value / Math.pow(10,18);
    }

    if(temp>=0)
    {
      return temp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    else{
      return temp;
    }

  }
  const str_format = (str) =>{
    var str_simple = str;
    if(str_simple.length>15)
    {
      str_simple = str.slice(0,15)+"..."
    }
    return str_simple;
  }

  return (
    <HCollection
      ctheme={ctheme ? 1 : 0}
      ltheme={lightTheme}
      dtheme={darkTheme}
      onClick={() => {
        // history.push({ pathname: "/Detail_page", search: index.toString() });
      }}
    >
      <Box display="flex" flex="238" width="238px" height="238px" overflow="hidden" style={{background: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "8px 8px 0px 0px"}}>
        {/* <img
          src={img}
          width=""
          height=""
          style={{
            borderRadius: "8px 8px 0px 0px",

          }}
        ></img> */}
      </Box>
      <Box display="flex" flex="75"  borderTop="1px solid #CECECE">
        <Box
          display="flex"
          flex="2"
          alignItems="center"
          justifyContent="center"
        >
          {`\u00a0`}
          {`\u00a0`}
          <img src={simg} width="32px" height="32px"></img>
        </Box>
        <Box display="flex" flex="7" flexDirection="column">
          <Box
            display="flex"
            flex="1"
            justifyContent="flex-start"
            alignItems="flex-end"
            fontFamily="Poppins"
            fontSize="16px"
            color={ctheme ? lightTheme.font_color1 : darkTheme.font_color1}
            fontWeight="500"
          >
            {str_format(title)}
          </Box>
          <Box
            display="flex"
            flex="1"
            justifyContent="flex-start"
            alignItems="center"
            fontFamily="Poppins"
            fontSize="16px"
            color={ctheme ? "#757B75" : darkTheme.font_color_grey}
            lineheight="22px"
            fontWeight="normal"

          >
            {str_format(name)}
          </Box>
        </Box>
      </Box>
    
    </HCollection>
  );
};

const HCollection = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 330px;
  flex-direction: column;
  background: ${({ ctheme, ltheme, dtheme }) =>
    ctheme ? ltheme.bgcolor_bar : dtheme.bgcolor_bar};
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    margin-top: 5%;
  }
`;

export default LastDrop;
