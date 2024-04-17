import styled from "styled-components";
import { Select, Switch } from "@material-ui/core";

export const SimpleSwitch = styled(Switch)`
  width: 40px !important;
  height: 20px !important;
  padding: 0px !important;
  border-radius: 100px;
  .MuiButtonBase-root {
    padding: 0;
    background: transparent;
    .MuiSwitch-thumb {
      background: white;
      margin: 4px;
      width: 12px;
      height: 12px;
      box-shadow: none;
    }
  }
  .Mui-checked {
    & + .MuiSwitch-track {
      background: #2ba55d !important;
      opacity: 1 !important;
    }
  }
`;

{
  /* <CustomSelect labelId="demo-simple-select-label" id="demo-simple-select" value={10} label="Age" onChange={() => {}}> */
}
{
  /* <MenuItem value={10}>Ten</MenuItem> */
}
{
  /* <MenuItem value={20}>Twenty</MenuItem> */
}
{
  /* <MenuItem value={30}>Thirty</MenuItem> */
}
{
  /* </CustomSelect> */
}
export const CustomSelect = styled(Select)`
  padding: 5px;
  border: 1px solid gray;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 8px;
  > div {
    padding-left: 8px;
  }
  &::before {
    display: none;
  }
  &::after {
    display: none;
  }
`;
