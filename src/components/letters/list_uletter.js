import React from "react";
import { Box } from '@material-ui/core'
import styled from 'styled-components';
import { lightTheme, darkTheme } from "../../theme/theme"
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const List_ULetter = ({ ctheme, str, width1, height1, flag }) => {
    return (
        <ILtter ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme} width={width1} height={height1}>
            <Box display="flex" flex="5" alignItems="center" justifyContent="flex-start">{str}</Box>
            <Box display="flex" flex="1" alignItems="center" justifyContent="flex-end">{flag?<MdArrowDropUp />:<MdArrowDropDown />}</Box>
        </ILtter>
    );
};

const ILtter = styled(Box)`
    display: flex;
    align-items: flex-start;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-bottom:1px solid #757B75;
    color:#757B75;
    margin-top: 32px;
    // color: ${({ ctheme, ltheme, dtheme }) => ctheme ? ltheme.font_color_grey : dtheme.font_color_grey};
    @media (max-width: 600px) {
        font-size: 14px !important;
    }
`


export default List_ULetter;