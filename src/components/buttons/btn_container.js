import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const BtnCustomize = ({
  color,
  back,
  width,
  height,
  border,
  str,
  borderRadius,
  marginL,
  ...props
}) => {
  return (
    <BtnCus
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={width}
      height={height}
      color={color}
      bgcolor={back}
      border={border}
      borderRadius={borderRadius}
      marginLeft={marginL}
      sx={{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineheight: "24px",
      }}
      {...props}
    >
      {" "}
      {str}
    </BtnCus>
  );
};

const BtnCus = styled(Box)`
  @media (max-width: 800px) {
    font-size: 15px !important;
  }
  @media (max-width: 600px) {
    font-size: 12px !important;
  }

  &:hover {
    cursor: pointer;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 0px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }
`;

export default BtnCustomize;
