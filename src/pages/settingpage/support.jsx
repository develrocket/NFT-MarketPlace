import React from "react";
import styled from "styled-components";
import { Box, Select, MenuItem } from "@material-ui/core";
import { MdLockOutline } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { CustomSelect } from "../../components/elements";

const Support = () => {
  return (
    <>
      <SupportMain pb="80px" fontFamily="Poppins">
        <Box mb="unset" fontSize="18px" lineheight="20px">
          Set a minimum offer for collections to ignore low offers.
        </Box>
        <TextBox>
          <div>General help</div>
          <div>
            Visit our <CustomLink>help center</CustomLink> to learn how to get started with buying, selling, and creating.
          </div>
        </TextBox>
        <TextBox>
          <div>General help</div>
          <div>
            Visit our <CustomLink>help center</CustomLink> to learn how to get started with buying, selling, and creating.
          </div>
        </TextBox>
        <TextBox>
          <div>General help</div>
          <div>
            Visit our <CustomLink>help center</CustomLink> to learn how to get started with buying, selling, and creating.
          </div>
        </TextBox>
        <TextBox>
          <div>General help</div>
          <div>
            Visit our <CustomLink>help center</CustomLink> to learn how to get started with buying, selling, and creating.
          </div>
        </TextBox>
        <TextBox>
          <div>General help</div>
          <div>
            Visit our <CustomLink>help center</CustomLink> to learn how to get started with buying, selling, and creating.
          </div>
        </TextBox>
        <CustomSelect labelId="demo-simple-select-label" id="demo-simple-select" value={10} label="Age" onChange={() => {}}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomSelect>
        <Box mt="30px" display="flex" justifyContent="center" alignItems="center" gridColumnGap="18px">
          <IoMdCheckmarkCircle fontSize="40px" lineheight="40px" color="#2BA55D" />
          <Box fontSize="18px" lineheight="20px" flexGrow="1">
            I understand I must provide a sworn statement certified by a notary public to unlock my account.
          </Box>
        </Box>
        <Box marginTop={["20px", "25px", "30px", "40px"]} bgcolor="#F16868" borderRadius="8px" fontSize="18px" lineheight="18px" textAlign="center" paddingY="19px" color="white" display="flex" justifyContent="center" alignItems="center" gridColumnGap="11px" sx={{ cursor: "pointer" }}>
          <MdLockOutline fontSize="20px" />
          Lock Account
        </Box>
      </SupportMain>
    </>
  );
};
const SupportMain = styled(Box)`
  max-width: 617px;
  display: flex;
  flex-direction: column;
`;
const TextBox = styled(Box)`
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 800px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 600px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  > div:first-child {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #131413;
    margin: 16px 0px;
    @media (max-width: 1000px) {
      font-size: 20px;
      line-height: 20px;
      margin: 16px 0px;
    }
    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 16px;
      margin: 12px 0px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
      line-height: 12px;
      margin: 8px 0px;
    }
  }
  > div:last-child {
    font-size: 18px;
    line-height: 20px;
    color: #363936;
  }
`;
const CustomLink = styled(Box)`
  color: #2ba55d;
  display: inline-block;
`;
export default Support;
