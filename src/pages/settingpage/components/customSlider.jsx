import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const CustomSlider = () => {
  return (
    <SliderContainer>
      <button>-</button>
      <div>
        <Box left={`35%`} />
        {/* <Slider /> */}
      </div>
      <button>+</button>
    </SliderContainer>
  );
};

const SliderContainer = styled(Box)`
  background: #ffffff;
  height: 40px;
  width: 304px;
  padding: 10px 16px;
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 1000px) {
    width: 304px;
    margin-top: 11px;
  }
  @media (max-width: 800px) {
    width: 270px;
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    width: 240px;
    margin-top: 70px;
  }
  > button {
    background: transparent;
    width: 14px;
    height: 20px;
    padding: 0px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #000000;
    cursor: pointer;
  }
  > div {
    flex-grow: 1;
    position: relative;
    border-top: 1px solid #757b75;
    display: flex;
    cursor: pointer;
    > div {
      position: absolute;
      top: 50%;
      background: #fcfcfc;
      width: 16px;
      height: 16px;
      border: 1px solid #757b75;
      border-radius: 100%;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
      transform: translate(-50%, -50%);
    }
  }
`;

export default CustomSlider;
