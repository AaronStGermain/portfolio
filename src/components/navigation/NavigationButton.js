import React from "react";
import styled from "styled-components";
import "./navigation-button-styles.css";

const NavigationButton = props => {
  return (
    <StyledHamburgerButton
      onMouseUp={props.handleMouseUp}
      isActive={props.isActive}
    >
      <HamburgerBox>
        <HamburgerInner></HamburgerInner>
      </HamburgerBox>
    </StyledHamburgerButton>
  );
};

export default NavigationButton;

const StyledHamburgerButton = styled.div.attrs(props => ({
  className: `hamburger hamburger--emphatic ${props.isActive && "is-active"}`
}))``;

const HamburgerBox = styled.div.attrs(props => ({
  className: "hamburger-box"
}))``;

const HamburgerInner = styled.div.attrs(props => ({
  className: "hamburger-inner"
}))``;
