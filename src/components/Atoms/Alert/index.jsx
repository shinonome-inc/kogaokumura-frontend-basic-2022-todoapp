import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
const Alert = ({ alertVisible, alertErrorText }) => {
  return <StyledAlert isActive={alertVisible}>{alertErrorText}</StyledAlert>;
};
export default Alert;
const StyledAlert = styled.div`
  width: 400px;
  height: 40px;
  padding: 10px 20px;
  margin: 0 auto;
  position: relative;
  top: 20px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.RED};
  border-radius: 4px;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  transition: 1s;
  transform: ${(props) =>
    props.isActive ? "translateY(40px)" : "translateY(-40px)"};
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
    top: 15px;
  }
`;
