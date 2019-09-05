import React from "react";
import styled from "styled-components";

const NavigationSubTitle = props => {
  return <StyledNavigationSubTitle>{props.text}</StyledNavigationSubTitle>;
};

const StyledNavigationSubTitle = styled.div`
  color: hsl(0, 0%, 75%);
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;

export default NavigationSubTitle;
