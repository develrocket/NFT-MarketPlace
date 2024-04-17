import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import CameraIcon from "../../../images/icons/camera.svg";
import MinimizedImage from "../../../images/tiger_circle1.png";
import ExpandedImage from "../../../images/big_tiger.png";
import CustomSlider from "./customSlider.jsx";

const DragImage = () => {
  return (
    <Container>
      <View>
        <Expanded>
          <img src={ExpandedImage} alt="" />
          <button>
            <img src={CameraIcon} alt="" />
          </button>
        </Expanded>
      </View>
      <Control>
        <Minimized>
          <img src={MinimizedImage} alt="" />
          <button>
            <img src={CameraIcon} alt="" />
          </button>
        </Minimized>
        <CustomSlider />
      </Control>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const View = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
`;
const Expanded = styled(Box)`
  position: relative;
  background: gray;
  height: 211px;
  overflow: hidden;
  border-radius: 8px;
  @media (max-width: 1000px) {
    height: 211px;
  }
  @media (max-width: 800px) {
    height: 170px;
  }
  @media (max-width: 600px) {
    height: 130px;
  }
  > img {
    width: 100%;
  }
  > button {
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
const Control = styled(Box)`
  position: relative;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Minimized = styled(Box)`
  position: absolute;
  top: 0px;
  left: 84px;
  width: 80px;
  height: 80px;
  border: 4px solid #fcfcfc;
  border-radius: 100%;
  overflow: hidden;
  transform: translateY(-50%);
  > img {
    width: 100%;
    height: 100%;
  }
  > button {
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
export default DragImage;
