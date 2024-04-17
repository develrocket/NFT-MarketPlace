/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box } from '@material-ui/core'
import styled from 'styled-components';
import { lightTheme, darkTheme } from "../../theme/theme";
import { useHistory } from "react-router";
// import history from "../../history";

const Hot_Collection = ({ img, simg, title, price, ctheme }) => {
    const history = useHistory()
    return (
        <HCollection ctheme={ctheme?1:0} ltheme={lightTheme} dtheme={darkTheme} onClick={()=>{
            history.push('/Collection_page');
        }}>
            <Box display="flex" flex="120">
                <img src={img} width="100%" height="100%"></img>
            </Box>
            <Box display="flex" flex="92" flexDirection="column">
                <Box display="flex" flex="1" justifyContent="center" alignItems="flex-end" fontFamily="Poppins" fontSize="18px" color={ctheme?"#363936":darkTheme.font_color1 } >{title}</Box>
                <Box display="flex" flex="1" justifyContent="center" alignItems="flex-start" fontFamily="Poppins" fontSize="12px" color={ctheme?"#757B75": darkTheme.font_color_grey}>{price}</Box>
            </Box>
            <Box position="absolute" left="40%" top="45%">
                <img src={simg} width="100%" height="100%"></img>
            </Box>
        </HCollection>
    );
};

const HCollection = styled(Box)`
    display:flex;
    position: relative;
    width:100%;
    height: 220px;
    flex-direction: column;
    background: ${({ctheme, ltheme, dtheme})=>ctheme?ltheme.bgcolor_bar:dtheme.bgcolor_bar};
    border: 1px solid #CECECE;
    box-sizing: border-box;
    border-radius: 8px;
    &:hover{
        cursor: pointer;
        box-shadow:
        inset 0 -3em 3em rgba(0,0,0,0.1),
              0 0  0 0px rgb(255,255,255),
              0.3em 0.3em 1em rgba(0,0,0,0.3);
    }
    @media (max-width: 600px) {
        margin-top: 5%;
    }
`


export default Hot_Collection;