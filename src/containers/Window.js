import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Draggable from "react-draggable";

import {
  createWindow,
  deleteWindow,
  activateWindow
} from "../store/actions/ui/windowActions";

class Window extends Component {
  componentDidMount() {
    this.props.activateWindow({ id: this.props.id });
  }

  handleMouseDown = event => {
    if (!this.props.isActive) this.props.activateWindow({ id: this.props.id });
  };

  handleDeleteWindow = event => {
    const { id, deleteWindow } = this.props;
    deleteWindow({ id });
  };

  render() {
    const {
      height,
      width,
      window,
      windowTitle,
      component,
      scrollable,
      hasPadding,
      positionOffset
    } = this.props;

    return (
      <Draggable
        handle=".windowTitle"
        positionOffset={positionOffset}
        onMouseDown={this.handleMouseDown}
      >
        <StyledWindow height={height} width={width} window={window}>
          <WindowTitle
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            isActive={window && window.isActive}
            className="windowTitle"
          >
            {windowTitle}
            <TitleButton
              isActive={window && window.isActive}
              onMouseUp={this.handleDeleteWindow}
            >
              X
            </TitleButton>
          </WindowTitle>
          <WindowBody
            isActive={window && window.isActive}
            scrollable={scrollable}
            hasPadding={hasPadding}
          >
            {component}
          </WindowBody>
        </StyledWindow>
      </Draggable>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    windowCount: state.ui.windows.windowCount,
    window: state.ui.windows.data[ownProps.id]
  };
};

export default connect(
  mapStateToProps,
  { createWindow, activateWindow, deleteWindow }
)(Window);

const StyledWindow = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.23), 0 6px 6px rgba(0, 0, 0, 0.27);
  position: absolute;
  z-index: ${props => (props.window ? props.window.zIndex : 0)};
`;

const WindowTitle = styled.div`
  flex: 1;
  flex-direction: row;
  background-color: ${props =>
    props.isActive ? "hsl(0, 0%, 5%)" : "hsl(0, 0%, 8%)"};
  padding: 10px;
  cursor: pointer;
`;

const WindowBody = styled.div`
  flex: 40;
  flex-direction: row;
  background-color: ${props =>
    props.isActive ? "hsl(0, 0%, 9%)" : "hsl(0, 0%, 7%)"};
  padding: ${props => (props.hasPadding ? "10px" : "0px")};
  overflow-y: ${props => (props.scrollable ? "scroll" : "none")};
`;

const TitleButton = styled.button.attrs({
  className: "btn-floating btn-small waves-effect waves-light"
})`
  background-color: ${props => (props.isActive ? "red" : "hsl(0, 0%, 14%)")};
  float: right;
  margin-left: 4px;
  transition: 0.2s;

  :hover {
    background-color: red;
    font-size: 16px;
  }
`;
