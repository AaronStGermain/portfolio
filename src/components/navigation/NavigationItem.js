import React from "react";
import styled from "styled-components";
import { FaReddit, FaCalculator, FaAddressCard } from "react-icons/fa";

const NavigationListItem = props => {
  return (
    <StyledListItem onMouseUp={e => props.handleListItemMouseUp(props, e)}>
      <Icon>{iconComponentsByAppName[props.appName]}</Icon>
      <Text>{props.text}</Text>
    </StyledListItem>
  );
};

export default NavigationListItem;

const iconComponentsByAppName = {
  REDDIT: <FaReddit size="25px" />,
  CALCULATOR: <FaCalculator size="25px" />,
  ABOUT: <FaAddressCard size="25px" />
};

const Text = styled.span`
  margin-left: 8px;
  padding-left: 8px;
  color: hsl(0, 0%, 78%) !important;
  border-left: 2px hsl(0, 0%, 40%) solid;
`;

const Icon = styled.div`
  width: 25px;
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  transition: 0.3s;
  white-space: nowrap;
  color: hsl(0, 0%, 78%);
  padding-left: 10px;

  :hover {
    color: orangered;
    background-color: hsl(0, 0%, 14%);
    cursor: pointer;
    border-left: 1px orangered solid;
  }
`;
