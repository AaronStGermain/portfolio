import React from "react";
import styled from "styled-components";

const NavigationDescription = props => {
  return (
    <StyledNavigationDescription>{props.text}</StyledNavigationDescription>
  );
};

export default NavigationDescription;

const StyledNavigationDescription = styled.div`
  display: block;
  height: 100px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: 0.3s;
  white-space: nowrap;
`;
