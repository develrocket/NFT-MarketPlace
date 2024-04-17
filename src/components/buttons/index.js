import styled from "styled-components";
import { Button, styled as mstyled } from "@material-ui/core";

export const OutlineSmBtn = mstyled(Button)({
  padding: "12px",
  paddingRight: (p) => (p.px ? p.px : "12px"),
  paddingLeft: (p) => (p.px ? p.px : "12px"),
  borderRadius: "8px",
  border: "1px solid",
  borderColor: "#2BA55D",
  fontSize: "18px",
  lineHeight: "18px",
  fontWeight: "600",
  color: "#2BA55D",
  textTransform: "initial",
});
export const FillSmBtn = mstyled(Button)({
  backgroundColor: "#2BA55D",
  padding: "12px",
  paddingRight: (p) => (p.px ? p.px : "12px"),
  paddingLeft: (p) => (p.px ? p.px : "12px"),
  borderRadius: "8px",
  borderColor: "#2BA55D",
  fontSize: "18px",
  lineHeight: "18px",
  fontWeight: "600",
  color: "white",
  textTransform: "initial",
  "&:hover": {
    backgroundColor: "#3FBF6F",
  },
});
export const FillMdBtn = styled(
  mstyled(Button)({
    backgroundColor: "#2BA55D",
    borderRadius: "8px",
    fontSize: "18px",
    lineHeight: "18px",
    fontWeight: "600",
    color: "white",
    textTransform: "initial",
    padding: "16px",
    "&:hover": {
      backgroundColor: "#3FBF6F",
    },
  })
)``;
