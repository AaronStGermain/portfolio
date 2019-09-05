import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationButton from "../components/navigation/NavigationButton";
import styled from "styled-components";
import { toggleNavigationBar } from "../store/actions/ui/navigationActions";

class NavigationBar extends Component {
  handleMouseUp = e => {
    this.props.toggleNavigationBar();
  };

  render() {
    return (
      <StyledNavigationBar>
        <NavigationButton
          isActive={this.props.isActive}
          handleMouseUp={this.handleMouseUp}
        />
      </StyledNavigationBar>
    );
  }
}

const mapStateToProps = state => ({
  isActive: state.ui.navigation.isActive
});

export default connect(
  mapStateToProps,
  { toggleNavigationBar }
)(NavigationBar);

const StyledNavigationBar = styled.div`
  height: 6vh;
  background-color: hsl(0, 0%, 4%);
  margin-bottom: 10px;
`;
