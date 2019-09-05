import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Calculator from "./containers/Calculator";
import Window from "./containers/Window";
import About from "./components/About";
import NavigationBar from "./containers/NavigationBar";
import NavigationList from "./containers/NavigationList";
import Reddit from "./containers/Reddit";

import { createWindow } from "./store/actions/ui/windowActions";
import { authenticateReddit } from "./store/actions/redditActions";
import { PROJECT_SETTINGS } from "./Constants";

const getComponentByAppName = id => ({
  CALCULATOR: <Calculator id={id} />,
  ABOUT: <About id={id} />,
  REDDIT: <Reddit id={id} />
});

class App extends Component {
  componentDidMount() {
    this.props.authenticateReddit();
    this.props.createWindow({
      appName: "ABOUT",
      isActive: true,
      ...PROJECT_SETTINGS["ABOUT"].WINDOW_SETTINGS,
      positionOffset: {
        x: "50%",
        y: "50%"
      },
      width: "50%"
    });
  }
  renderWindowComponents = () => {
    const windows = this.props.windows;
    return windows.map(window => (
      <Window
        key={window.id}
        {...window}
        component={getComponentByAppName(window.id)[window.appName]}
      />
    ));
  };

  render() {
    return (
      <StyledApp>
        <NavigationBar />
        <NavigationList />
        {this.renderWindowComponents()}
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
  windows: Object.values(state.ui.windows.data)
});

export default connect(
  mapStateToProps,
  { authenticateReddit, createWindow }
)(App);

const StyledApp = styled.div`
  background-color: hsl(0, 0%, 7%);
  height: 100vh;
  color: hsl(0, 0%, 88%);
`;
