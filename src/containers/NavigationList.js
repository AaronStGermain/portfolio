import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { PROJECT_SETTINGS } from "../Constants";
import NavigationSubTitle from "../components/navigation/NavigationSubTitle";
import NavigationDescription from "../components/navigation/NavigationDescription";
import NavigationListItem from "../components/navigation/NavigationItem";
import { createWindow } from "../store/actions/ui/windowActions";
import { toggleNavigationBar } from "../store/actions/ui/navigationActions";

const { REDDIT, ABOUT, CALCULATOR } = PROJECT_SETTINGS;

class NavigationList extends Component {
  handleListItemMouseUp = (props, e) => {
    this.props.createWindow({
      appName: props.appName,
      isActive: true,
      ...PROJECT_SETTINGS[props.appName].WINDOW_SETTINGS,
      positionOffset: {
        x: "30%",
        y: "30%"
      }
    });
    this.props.toggleNavigationBar();
  };
  render() {
    return (
      <StyledNavigationList isActive={this.props.isActive}>
        <NavigationDescription text="Navigation" />
        <NavigationSubTitle text="Projects" />
        <NavigationListItem
          text="Reddit (Work in Progress)"
          handleListItemMouseUp={this.handleListItemMouseUp}
          appName={REDDIT.APP_NAME}
        />
        <NavigationListItem
          text="Calculator"
          handleListItemMouseUp={this.handleListItemMouseUp}
          appName={CALCULATOR.APP_NAME}
        />
        <NavigationListItem
          text="About Me & This Portfolio"
          appName={ABOUT.APP_NAME}
          handleListItemMouseUp={this.handleListItemMouseUp}
        />
      </StyledNavigationList>
    );
  }
}

const mapStateToProps = state => ({
  isActive: state.ui.navigation.isActive
});

export default connect(
  mapStateToProps,
  { createWindow, toggleNavigationBar }
)(NavigationList);

const StyledNavigationList = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
  width: ${props => (props.isActive ? "300px" : "0")};
  left: 0;
  bottom: 0;
  background-color: hsl(0, 0%, 11%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.23), 0 6px 6px rgba(0, 0, 0, 0.27);
  z-index: 1000;
  position: absolute;
  transition: 0.5s;
  overflow-x: hidden;
`;
