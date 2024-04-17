import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@material-ui/core";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const DropDown = ({ text, children, color = "#2BA55D" }) => {
  const [show, setShow] = useState(false);
  const dropPannel = useRef();
  useEffect(() => {
    console.log(dropPannel.current.childNodes);
    const handle = (e) => {
      if (dropPannel?.current && !dropPannel.current.contains(e.target)) {
        setShow(false);
      }
      //   else if (dropPannel.current.children.children.contains(e.target))
      // setShow(false);
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  return (
    <Box position="relative">
      <Box
        onClick={() => {
          setShow(!show);
        }}
      >
        <Box ref={dropPannel} padding="8px 24px" paddingRight="5px" border={`1px solid ${color}`} borderRadius="8px" fontFamily="Poppins" fontSize="16px" fontWeight="600" lineHeight="16px" textAlign="center" color={color} display="flex" gridColumnGap="5px" css={{ cursor: "pointer" }} alignItems={"center"}>
          {text + "  "}
          <Box ml={"auto"}>{show ? <BiChevronUp fontSize="20px" lineHeight="16px" /> : <BiChevronDown fontSize="20px" lineHeight="16px" />}</Box>
        </Box>
      </Box>
      <Box minWidth="182px" position="absolute" top="calc(100% + 5px)" zIndex="1" left="50%" bgcolor="white" paddingY={2} border="1px solid #cecece" boxShadow="0px 4px 22px 5px rgba(0, 0, 0, 0.08)" borderRadius="8px" display={show ? "flex" : "none"} flexDirection="column" justifyContent="center" alignItems="stretch" css={{ cursor: "pointer", transform: "translateX(-50%)" }}>
        {children}
      </Box>
    </Box>
  );
};

export const DropDownItem = styled(Box)({
  padding: "8px 24px",
  fontFamily: "Poppins",
  fontSize: "14px",
  fontWeight: "500",
  lineheight: "20px",
  color: "#757B75",
  textAlign: "left",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gridColumnGap: "5px",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
